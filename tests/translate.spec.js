import { test, expect } from '@playwright/test';

const testCases = [
  { input: 'mama lamayi ekka katha karanavaa', name: 'Test Case 1' },
  { input: 'api raathri kaema hadhanavaa', name: 'Test Case 2' },
  { input: 'oyaa pothak kiyavanavaa', name: 'Test Case 3' },
   { input: 'mama vaeda karanavaa,ehemanam api passe hamuvemu', name: 'Test Case 4' },
   { input: 'api gamata yanavaa saha loku ammaa hamu venavaa', name: 'Test Case 5' },
 { input: 'vahinavaa namuth api gedhara innavaa', name: 'Test Case 6' }
];

for (const tc of testCases) {
  test(tc.name, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', tc.input);
    const pageText = await page.textContent('body');
    expect(pageText).toBeTruthy();
  });
}
