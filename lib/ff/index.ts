import { setBrowser } from '../binding';

setBrowser('ff');

// re-export all the types and functions from the main index.ts file
export * from '../index';