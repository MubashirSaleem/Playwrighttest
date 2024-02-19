name: Playwright Tests

 on:
   pull_request:
   branches: [ main ]
   schedule:
   - cron: '0 0 -23/1 * * *' 
   
jobs:
  test:
    timeout-minutes: 60
    runs-on: windows-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
