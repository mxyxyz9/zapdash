/**
 * Environment variables utility for ZapDash
 * 
 * This file provides helper functions for accessing environment variables
 * and ensures they are properly loaded and validated.
 */

/**
 * Get an environment variable with validation
 * @param key The environment variable key
 * @param defaultValue Optional default value if not found
 * @param required Whether the variable is required (throws error if missing)
 */
export function getEnv(
  key: string,
  defaultValue?: string,
  required: boolean = false
): string {
  const value = process.env[key] || defaultValue;
  
  if (required && !value) {
    throw new Error(`Environment variable ${key} is required but not set.`);
  }
  
  return value || '';
}

/**
 * Get a public environment variable (NEXT_PUBLIC_*)
 * These are accessible on the client-side
 */
export function getPublicEnv(
  key: string,
  defaultValue?: string,
  required: boolean = false
): string {
  // Ensure key has NEXT_PUBLIC_ prefix
  const fullKey = key.startsWith('NEXT_PUBLIC_') ? key : `NEXT_PUBLIC_${key}`;
  return getEnv(fullKey, defaultValue, required);
}

/**
 * Environment variables used in the application
 * Add type-safe access to your environment variables here
 */
export const env = {
  // API Keys
  apiKey: () => getEnv('API_KEY', undefined, true),
  apiSecret: () => getEnv('API_SECRET', undefined, true),
  
  // Database
  dbHost: () => getEnv('DB_HOST', 'localhost'),
  dbPort: () => getEnv('DB_PORT', '5432'),
  dbName: () => getEnv('DB_NAME', 'zapdash'),
  dbUser: () => getEnv('DB_USER'),
  dbPassword: () => getEnv('DB_PASSWORD'),
  
  // Authentication
  authSecret: () => getEnv('AUTH_SECRET', undefined, true),
  
  // Public variables
  appUrl: () => getPublicEnv('APP_URL', 'http://localhost:3000'),
};