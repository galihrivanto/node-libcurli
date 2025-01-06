import { expect } from 'chai';
import express from 'express';
import { Server } from 'http';
import { AddressInfo } from 'net';
import { Browser, BROWSER_CONFIGS, impersonate } from '../lib/impersonate';

describe('Browser Impersonation', function () {
    // make the test timeout 30 seconds
    this.timeout(30000);

    let server: Server;
    let port: number;

    // Start express server before tests
    before((done) => {
        const app = express();
        
        // Endpoint that returns received headers
        app.get('/headers', (req, res) => {
            res.json(req.headers);
        });

        server = app.listen(0, () => { // Port 0 means random available port
            port = (server.address() as AddressInfo).port;
            done();
        });
    });

    // Close server after tests
    after((done) => {
        server.close(done);
    });

    // Test cases for different browsers
    [
        Browser.Chrome116,
        Browser.Firefox117,
        Browser.Safari15_5
    ].forEach((browser) => {
        it(`should correctly impersonate ${browser}`, async () => {
            // Get the curly function for the browser
            const curly = impersonate(browser);

            // Make request to our test server
            const { statusCode, data } = await curly(`http://localhost:${port}/headers`);

            if (statusCode !== 200) {
                throw new Error(`Failed to make request to server: ${statusCode}`);
            }

            // Parse response data
            const receivedHeaders = data;

            console.log("receivedHeaders", receivedHeaders);

            // Get expected headers for this browser
            const expectedHeaders = {
                ...BROWSER_CONFIGS[browser].headers,
                host: `localhost:${port}` // Host header is automatically added
            };

            // Convert all header keys to lowercase for comparison
            const normalizedExpectedHeaders = Object.entries(expectedHeaders).reduce((acc, [key, value]) => {
                acc[key.toLowerCase()] = value;
                return acc;
            }, {} as Record<string, string>);

            console.log("normalizedExpectedHeaders", normalizedExpectedHeaders);

            // Check each expected header
            Object.entries(normalizedExpectedHeaders).forEach(([key, value]) => {
                expect(receivedHeaders[key]).to.equal(value,
                    `Header "${key}" doesn't match for ${browser}`);
            });
        });
    });

    // custom cookie
    it('should correctly impersonate with custom cookie', async () => {
        const curly = impersonate(Browser.Firefox117);
        const cookieValue = 'custom_cookie=value';
        const { statusCode, data } = await curly(`http://localhost:${port}/headers`, {
            httpHeader: ['Cookie: custom_cookie=value'],
        });

        if (statusCode !== 200) {
            throw new Error(`Failed to make request to server: ${statusCode}`);
        }

        const receivedHeaders = data;

        console.log("receivedHeaders", receivedHeaders);

        // received headers should contain the custom cookie
        expect(receivedHeaders['cookie']).to.equal(cookieValue);
    });

    // Test error case
    it('should throw error for unsupported browser', () => {
        expect(() => impersonate('invalid' as Browser))
            .to.throw('Unsupported browser: invalid');
    });
});