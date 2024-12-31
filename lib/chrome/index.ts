import { setBrowser } from '../binding';

setBrowser('chrome');

// re-export all the types and functions from the main index.ts file
export * from '../index';