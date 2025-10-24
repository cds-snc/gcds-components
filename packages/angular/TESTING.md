# Unit Testing for GCDS Angular Components

This document describes how to run unit tests for the GCDS Angular components.

## Test Framework

The unit tests use **Jest** with `jest-preset-angular` for testing Angular wrapper components.

## Running Tests

### From the Root Directory

```bash
# Run all unit tests for the Angular package
npm run test:unit

# This is equivalent to:
npm run test:unit --workspace=packages/angular
```

### From the Angular Package Directory

```bash
cd packages/angular

# Run tests once
npm run test:unit

# Run tests in watch mode
npm run test:unit:watch

# Run tests with coverage (for CI/CD)
npm run test:unit:ci
```

## Test Files

- **Test Files**: `tests/unit/*.spec.ts` (e.g., `tests/unit/gcds-input.spec.ts`)
- **Jest Setup**: `tests/setup-jest.ts`
- **Angular Test Setup**: `tests/test-setup.ts`
- **Jest Configuration**: `jest.config.js`
- **Karma Configuration**: `karma.conf.js`

## Current Test Coverage

### GcdsInput Component

The test suite for `GcdsInput` includes comprehensive tests for all input types and their permutations:

#### Input Types Tested
- `text` (default)
- `email`
- `number`
- `password`
- `search`
- `tel`
- `url`

#### Test Categories
1. **Basic Type Testing** - Verifies each input type can be set and accepts appropriate values
2. **Common Properties** - Tests all shared properties (required, disabled, readonly, label, hint, etc.)
3. **Type-Specific Properties** - Tests properties unique to certain types (min/max for number, pattern for tel)
4. **Permutations** - Tests combinations of types with various properties
5. **Edge Cases** - Tests type switching, undefined values, and property persistence
6. **Validation** - Tests validator and validateOn properties

#### Total Tests
- **64 tests** covering all input types and their combinations

## CI/CD Integration

The tests are configured to run in CI/CD environments:

```bash
# CI/CD command with coverage
npm run test:unit:ci
```

This command:
- Runs tests in non-interactive mode
- Generates code coverage reports
- Uses the `--ci` flag for CI/CD optimizations
- Outputs coverage to `../../coverage/gcds-components-angular/`

## Adding New Component Tests

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

**Note**: Always place test files in `tests/unit/` directory, NOT in `src/lib/stencil-generated/` as that folder is auto-generated.

## Troubleshooting

### Tests won't run
- Ensure all dependencies are installed: `npm install`
- Check that Node.js version is compatible (v18 or higher recommended for production)

### Tests fail unexpectedly
- Clear Jest cache: `jest --clearCache`
- Rebuild the project: `npm run build`

### Coverage not generated
- Use `npm run test:unit:ci` which includes the `--coverage` flag
- Check the `../../coverage/gcds-components-angular/` directory for reports

