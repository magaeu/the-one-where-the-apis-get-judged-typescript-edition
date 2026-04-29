# the-one-where-the-apis-get-judged-typescript-edition

## Project Description

This is a TypeScript-based API testing framework using Playwright for comprehensive API validation. It focuses on validating status codes, response schemas, content, and utilizes builders for data generation, structure with parameterized tests, environment variables, types, and tags.

## Technology stack

- **TypeScript**: For type-safe development and better code maintainability.
- **Playwright**: For API testing and automation.
- **Node.js**: Runtime environment for executing JavaScript/TypeScript.
- **Zod**: For schema validation of API responses.
- **@faker-js/faker**: For generating fake test data.
- **dotenv**: For managing environment variables.
- **npm**: Package manager for dependency management.

## Prerequisites

- **Node.js** (version 18 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes bundled with Node.js)

## Installation

To install the dependencies, run:

```bash
npm install
```

## Running Tests

To execute the tests, run:

```bash
npm test
```

## Project Structure

```
├── package.json            Contains library dependencies and npm scripts
├── playwright.config.ts    Playwright configuration for test execution
├── README.md               Project documentation and usage guide
├── tsconfig.json           TypeScript compiler settings
├── api/                    Holds API client, request context code and resources implementation
├── data-generator/         Contains test data generation utilities
├── env/                    Environment-specific configuration files
├── fixtures/               Reusable test fixtures for scenarios
├── schemas/                Schema definitions for API responses
├── tests/                  Test specification files and suites
├── types/                  Shared TypeScript type definitions
├── utils/                  Shared utilities and helper functions
    ├── constants           Common shared values
    └── helpers             Shared helper functions
```

## Key Features

- Validate status code
- Validate schema response
- Validate response content
- Use builder for generating data
- Use given - when - then structure
- Parametized tests
- Use environment variables
- Use types
- Use tags
- Use absolute paths on typescript configuration
- Use prettier for code format rules

## References

- [How to Build a Playwright Framework](https://medium.com/codetodeploy/how-to-build-a-playwright-framework-that-survives-10-000-tests-86132ab4c101)
