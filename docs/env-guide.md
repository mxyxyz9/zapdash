# Environment Variables Guide for ZapDash

## Overview

This guide explains how to properly manage sensitive information in the ZapDash project using environment variables.

## Why Use Environment Variables?

Environment variables allow you to:

- Keep sensitive information (API keys, database credentials) out of your codebase
- Configure different environments (development, staging, production) with appropriate values
- Prevent accidental exposure of secrets in your Git repository

## Setup Instructions

1. Copy the example environment file to create your own:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and replace the placeholder values with your actual credentials

3. **IMPORTANT**: Never commit your `.env` file to Git. It's already added to `.gitignore`

## Available Environment Variables

The following environment variables are used in the project:

| Variable | Description | Example |
|----------|-------------|--------|
| `API_KEY` | External API authentication key | `abc123xyz456` |
| `API_SECRET` | Secret for API authentication | `your-secret-here` |
| `DB_HOST` | Database host address | `localhost` or `db.example.com` |
| `DB_PORT` | Database port | `5432` |
| `DB_NAME` | Database name | `zapdash` |
| `DB_USER` | Database username | `db_user` |
| `DB_PASSWORD` | Database password | `secure-password` |
| `AUTH_SECRET` | Secret for authentication | `random-secure-string` |
| `NEXT_PUBLIC_APP_URL` | Public URL of the application | `http://localhost:3000` |

## Using Environment Variables in Code

In Next.js, you can access environment variables in your code like this:

```javascript
// Server-side code (API routes, getServerSideProps, etc.)
const apiKey = process.env.API_KEY;

// Client-side code (only variables prefixed with NEXT_PUBLIC_)
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
```

## Adding New Environment Variables

When adding new environment variables:

1. Add them to `.env.example` with placeholder values
2. Add them to your local `.env` file with actual values
3. Update this documentation
4. If needed, inform other team members about the new required variables

## Best Practices

- Never hardcode sensitive information in your codebase
- Use descriptive names for your environment variables
- Provide clear documentation for each variable
- For production deployment, use the platform's secure environment variable storage (Vercel, Netlify, etc.)