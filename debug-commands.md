# Playwright Debug Commands

## Useful Commands

### Run specific test with repeat for debugging flaky tests

```bash
npx playwright test tests/tab-navigation.spec.ts -g "switches to node.js tab" --repeat-each=10
```

### Run tests in headed mode (see browser)

```bash
npx playwright test --headed
```

### Show the HTML test report
 npx playwright show-report
