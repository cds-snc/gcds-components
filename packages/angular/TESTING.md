# Testing for GCDS Angular Components
## Table of Contents
- [Integration and E2E Testing](#integration-and-e2e-testing)
  - [Test Application Setup](#test-application-setup)
  - [Running the Test Application](#running-the-test-application)
  - [Test Framework](#test-framework)
  - [Running Integration and E2E Tests](#running-integration-and-e2e-tests)
  - [Test Files](#test-files)
  - [Current Test Coverage](#current-test-coverage)
    - [Form Components](#form-components-ngmodel-support)
    - [RouterLink Support](#routerlink-support)
- [Unit Testing](#unit-testing)
  - [Test Framework](#test-framework-1)
  - [Running Tests](#running-tests)
  - [Test Files](#test-files-1)
  - [Current Test Coverage](#current-test-coverage-1)
    - [GcdsInput Component](#gcdsinput-component)
  - [CI/CD Integration](#cicd-integration)
  - [Adding New Component Tests](#adding-new-component-tests)
  - [Troubleshooting](#troubleshooting)

## Integration and E2E Testing 
Integration and end-to-end (E2E) tests for the GCDS Angular components are conducted within a sample Angular application located in the `tests/app` directory. This application serves as a testing ground to ensure that the components function correctly within an actual Angular environment.

### Test Application Setup
To set up the test application, follow these steps:
1. Navigate to the `tests/app` directory:
   ```bash
   cd packages/angular/tests/app
   ```
2. Install the necessary dependencies:
3. Run the following command:
   ```bash
   npm install
   ```
### Running the Test Application
To run the test application, use the Angular CLI command:
```bash
ng serve
```
This will start the development server, and you can access the application in your web browser at `http://localhost:4200`. The application includes various GCDS components that you can interact with to verify their functionality.

### Test Framework
The integration and E2E tests utilize **Playwright** for browser automation and testing. Playwright allows for cross-browser testing and provides a robust set of tools for simulating user interactions.

### Running Integration and E2E Tests
This will launch the Playwright test runner and execute the tests defined in the `tests/e2e` directory.

#### From the Root Directory
```bash
npm run test --workspace=packages/angular
```

#### From the Angular Package Directory

```bash
npm run test
```

### Test Files
- **E2E Test Files**: `tests/e2e/*.spec.ts` (e.g., `tests/e2e/gcds-input.e2e-spec.ts`)
- **Playwright Configuration**: `playwright.config.ts`
- **Test Application**: `tests/app/`

### Current Test Coverage
The E2E test suite currently includes tests for the following components:

#### Form Components (NgModel Support)
The tests verify that the following form components support Angular's `ngModel` for two-way data binding:
- `GcdsInput`
- `GcdsTextarea`
- `GcdsDateInput`
- `GcdsSelect`
- `GcdsRadios`
- `GcdsCheckboxes`

Future tests will expand coverage to include additional components and scenarios. Here are some planned areas for further testing:
- Additional components (e.g., buttons, modals, navigation)
- Rendering and basic interactions
- Form validation and error handling
- Types of inputs and edge cases

#### RouterLink Support
The tests also ensure that components with link functionality properly support Angular's `RouterLink` directive:
- `GcdsButton`
- `GcdsCard`
- `GcdsLangToggle`
- `GcdsLink`
- `GcdsNavLink`

Future tests will cover more components and link scenarios, including:
- Additional support for routerLink properties like `queryParams` and `fragment`

## Unit Testing

This document describes how to run unit tests for the GCDS Angular components.

### Test Framework

The unit tests use **Jest** with `jest-preset-angular` for testing Angular wrapper components.

### Running Tests

#### From the Root Directory

```bash
# Run all unit tests for the Angular package
npm run test:unit

# This is equivalent to:
npm run test:unit --workspace=packages/angular
```

#### From the Angular Package Directory

```bash
cd packages/angular

# Run tests once
npm run test:unit

# Run tests in watch mode
npm run test:unit:watch

# Run tests with coverage (for CI/CD)
npm run test:unit:ci
```

### Test Files

- **Test Files**: `tests/unit/*.spec.ts` (e.g., `tests/unit/gcds-input.spec.ts`)
- **Jest Setup**: `tests/setup-jest.ts`
- **Angular Test Setup**: `tests/test-setup.ts`
- **Jest Configuration**: `jest.config.js`

### Current Test Coverage

#### GcdsInput Component

The test suite for `GcdsInput` includes comprehensive tests for all input types and their permutations:

##### Input Types Tested
- `text` (default)
- `email`
- `number`
- `password`
- `search`
- `tel`
- `url`

##### Test Categories
1. **Basic Type Testing** - Verifies each input type can be set and accepts appropriate values
2. **Common Properties** - Tests all shared properties (required, disabled, readonly, label, hint, etc.)
3. **Type-Specific Properties** - Tests properties unique to certain types (min/max for number, pattern for tel)
4. **Permutations** - Tests combinations of types with various properties
5. **Edge Cases** - Tests type switching, undefined values, and property persistence
6. **Validation** - Tests validator and validateOn properties

##### Total Tests
- **64 tests** covering all input types and their combinations

### CI/CD Integration

The tests are configured to run in CI/CD environments:

```bash
# CI/CD command with coverage
npm run test:unit:ci
```

This command:
- Runs tests in non-interactive mode
- Uses the `--ci` flag for CI/CD optimizations

### Adding New Component Tests

To add tests for other components:

1. Create a test file: `tests/unit/gcds-[component-name].spec.ts`
2. Import the component from `../../src/lib/stencil-generated/components`
3. Create a test host component if needed for complex property binding
4. Follow the pattern established in `gcds-input.spec.ts`

Example structure:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { YourComponent } from '../../src/lib/stencil-generated/components';

describe('YourComponent', () => {
  let fixture: ComponentFixture<YourComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    
    fixture = TestBed.createComponent(YourComponent);
    fixture.detectChanges();
  });
  
  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });
  
  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
```

### Troubleshooting

#### Tests won't run
- Ensure all dependencies are installed: `npm install`
- Check that Node.js version is compatible (v18 or higher recommended for production)

#### Tests fail unexpectedly
- Clear Jest cache: `jest --clearCache`
- Rebuild the project: `npm run build`

