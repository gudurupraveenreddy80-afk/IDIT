
import { test, expect } from '@playwright/test';
import data from '../testdata/login1.json';

test('Login', async ({ page }) => {

  await page.goto('https://absa-absa-aic-bau-ci-qa.idit.sapiens.com/idit-web/web_security_manager/organizationUnitsList.do');

  await page.getByRole('textbox', { name: '* User name:' }).fill(data.Username);

  await page.getByRole('textbox', { name: '* Password:' }).fill(data.Password);

  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Sessions' }).click();

});



test('Login2', async ({ page }) => {
  await page.goto(
    'https://absa-absa-aic-bau-ci-qa.idit.sapiens.com/idit-web/web_security_manager/organizationUnitsList.do'
  );

  await page.getByRole('textbox', { name: '* User name:' }).fill('data1.Username');

  await page.getByRole('textbox', { name: '* Password:' }).fill('data1.Paswword');

  // Wait for the expected navigation after login
  await Promise.all([
    page.waitForLoadState('domcontentloaded').catch(() => { }),
    page.getByRole('button', { name: 'Login' }).click()
  ]);

  // Verify successful navigation or login result
  await expect(
    page.getByRole('link', { name: 'Sessions' })
  ).toBeVisible({ timeout: 30000 });
});


test.skip('test', async ({ page }) => {
  await page.goto('https://absa-absa-aic-bau-ci-qa.idit.sapiens.com/idit-web/web_security_manager/organizationUnitsList.do');
  await page.getByRole('textbox', { name: '* User name:' }).click();
  await page.getByRole('textbox', { name: '* User name:' }).fill('administrator');
  await page.getByRole('textbox', { name: '* User name:' }).press('Tab');
  await page.getByRole('textbox', { name: '* Password:' }).fill('11');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('The username/password')).toBeVisible()({ TIMEOUT: 40000 });
});