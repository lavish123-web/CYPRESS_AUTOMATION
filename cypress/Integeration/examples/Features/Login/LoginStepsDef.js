import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../../support/Pages/LoginPage";

const loginpage = new LoginPage();
let emailId;
Given('I visit to website', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})
When('I enter Email address on {string} textbox', (email) => {
    loginpage.getEmailTextBox().type(email);
    emailId=email;
})
Then('I enter Password on {string} textbox', (password) => {
    loginpage.getPasswordTextBox().type(password);
})
When('I click on login buton', () => {
    cy.wait(2000)
    loginpage.getLoginBtn().click()
})
Then('I should validate email address',()=>{
    loginpage.getValidateEmailId().should('have.text',emailId)
})
Then('I should be on Broker Insurance WebPage', () => {
    loginpage.getTextHomeTitlepage().should('have.text', 'Broker Insurance WebPage')
})
When('I enter invalid Email address on {string} textbox', (invalidEmail) => {
    loginpage.getEmailTextBox().type(invalidEmail);
})
Then('I enter invalid Password on {string} textbox', (invalidpass) => {
    loginpage.getPasswordTextBox().type(invalidpass);
})
Then('I should see an error message for invalid login', () => {
    loginpage.getInvalidCredentialErrorText().should('have.text', 'Enter your Email address and password correct')
})
When('I click on Logout Button',()=>{
    loginpage.getLogoutBtn().click()
})
