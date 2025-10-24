# Quick Start: Unit Testing

## ✅ Status: All Tests Passing (64/64)

## Run Tests

### Quick Commands

```bash
# From root directory
npm run test:unit

# From packages/angular directory  
npm run test:unit          # Run once
npm run test:unit:watch    # Watch mode for development
npm run test:unit:ci       # CI/CD with coverage
```

## Current Test Coverage

**GcdsInput Component: 64 tests**

### All 7 Input Types Tested
✓ text | ✓ email | ✓ number | ✓ password | ✓ search | ✓ tel | ✓ url

### Test Categories
- Basic type acceptance and value handling
- Common properties (required, disabled, readonly, label, hint, etc.)
- Type-specific properties (min/max for number, pattern for tel/text)
- Type + property permutations
- Edge cases (type switching, undefined values, property persistence)
- Validation properties

## CI/CD Integration

The test suite is ready for CI/CD:

```yaml
# Example GitHub Actions
- run: npm run test:unit:ci
  working-directory: ./packages/angular
```

Coverage reports generated at: `coverage/gcds-components-angular/`

## Next Steps

To add tests for other components, edit:
`src/lib/stencil-generated/components.spec.ts`

Follow the `GcdsInput` pattern for components like:
- GcdsSelect, GcdsTextarea, GcdsButton, GcdsCheckboxes, GcdsRadios, etc.

---

For detailed documentation, see [TESTING.md](./TESTING.md)

