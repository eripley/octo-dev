const { I } = inject();

const getDataFromDataTable = ({ dataTable, rowIndex = 0 }) => dataTable.parse().hashes()[rowIndex];

const ClockUnit = require('../../helpers/ClockUnit');

const SELECTORS = {
  SIGNUP_BUTTON: { xpath: '//button[@data-type="page_header"]' },
  EMAIL_INPUT: { id: 'signup-payed-email' },
  PROFILE_NAME_INPUT: { id: 'signup-payed-full_name' },
  COMPANY_NAME_INPUT: { id: 'signup-payed-company' },
  PHONE_INPUT: { id: 'signup-payed-phone' },
  REGISTER_BUTTON: { id: 'payed-signup-button' },
  ROLE_CHOOSING: { id: 'signup-payed-position' },
  VALIDATE_WINDOW: { id: '//div[@class="validate__text"]' },
  VALIDATE_TEXT: { xpath: '//div[@class="validate__text"]' },
  OPTION_VALUE: { xpath: '//option[@value="CEO"]' },
  COOKIE_BUTTON: { id: 'adroll_allow_all' },
  VALIDATE_TOOLTIP: { xpath: '//div[@class="validate__text"]' },
};

const KEYBOARD = {
  ARROW_DOWN: 'ArrowDown',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  CONTROL: 'Control',
  KEY_A: 'A',
  BACKSPACE: 'Backspace',
};

Given(/^I on the main page$/, async () => {
  await I.amOnPage('ru');
  await I.wait(ClockUnit.DEFAULT_TIMEOUT);
  await I.click(SELECTORS.COOKIE_BUTTON);
});

When(/^I click on the sign up button$/, async () => {
  await I.waitForElement(SELECTORS.SIGNUP_BUTTON);
  await I.click(SELECTORS.SIGNUP_BUTTON);
  await I.wait(ClockUnit.DEFAULT_TIMEOUT);
});

When('I filling the form with parameters', async (dataTable) => {
  const {
    email, name, company, phone,
  } = getDataFromDataTable({ dataTable });
  await I.fillField(SELECTORS.EMAIL_INPUT, email);
  await I.fillField(SELECTORS.PROFILE_NAME_INPUT, name);
  await I.fillField(SELECTORS.COMPANY_NAME_INPUT, company);
  await I.fillField(SELECTORS.PHONE_INPUT, phone);
});

When(/^I choose a role "([^"]*)?"$/, async (role) => {
  await I.click(SELECTORS.ROLE_CHOOSING);
  await I.selectOption(SELECTORS.ROLE_CHOOSING, role);
  await I.pressKey(KEYBOARD.ENTER);
  // await I.wait(ClockUnit.DEFAULT_TIMEOUT);
});

When(/^I press a register button$/, async () => {
  await I.click(SELECTORS.REGISTER_BUTTON);
  await I.wait(ClockUnit.DEFAULT_TIMEOUT);
});

Then(/^I see the text "([^"]*)?" inside window$/, async (text) => {
  await I.waitForVisible(SELECTORS.VALIDATE_TOOLTIP);
  await I.see(text);
});
