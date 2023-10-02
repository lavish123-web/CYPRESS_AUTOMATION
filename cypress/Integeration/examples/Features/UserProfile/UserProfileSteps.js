import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../../support/Pages/LoginPage";
import UserProfile from "../../../../support/Pages/UserProfilePage";

const loginpage = new LoginPage();
const userProfilePage = new UserProfile();

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
When('I click on Profile Button', () => {
    userProfilePage.getProfileBtn().click()
})
Then('I validate all fields under UserProfile', () => {
    userProfilePage.getTitle().should('have.text', 'Title:')
    userProfilePage.getFirstName().should('have.text', 'Firstname:')
    userProfilePage.getSurName().should('have.text', 'Surname:')
    userProfilePage.getPhone().should('have.text', 'Phone:')
    userProfilePage.getDateOfBirth().should('have.text', 'Dataofbirth:')
    userProfilePage.getLicenseType().should('have.text', 'License type:')
    userProfilePage.getLicensePeriod().should('have.text', 'License period:')
    userProfilePage.getOccupation().should('have.text', 'Occupation:')
    userProfilePage.getDriverHistory().should('have.text', 'Driver History:')
    userProfilePage.getAddress().should('have.text', 'ADDRESS:')
})
When('I click on EditProfile Button', () => {
    userProfilePage.getEditProfileBtn().click()
})
Then('I should be on Editing user profile page', () => {
    userProfilePage.getValidateTextmsg().should('have.text', 'Editing user profile')
})
When('I enter valid user data in Title, Surname, FirstName and phone fields', () => {
    userProfilePage.getSelectUSerTitle().select('Mr')
    userProfilePage.getSelectUserSurname().type('neema')
    userProfilePage.getSelectUserFirstname().type('Lavish')
    userProfilePage.getSelectUserPhone().type('8962881545')
})
Then('I select DateofBirth, LicenseType, LicensePeriod and Occupation fields', () => {
    userProfilePage.getSelectUserdobYear().select('1995')
    userProfilePage.getSelectUserdobMonth().select('April')
    userProfilePage.getSelectUserdobDate().select('30')
    userProfilePage.getSelectUserLicenseType().check()
    userProfilePage.getSelectLicensePeriod().select('1')
    userProfilePage.getSelectUserOccupation().select('Engineer')
})
When('I enter user data in Address, City, Country and Postcode fields', () => {
    userProfilePage.getEnterAdressStreet().type('33 ,Rajendra Nagar')
    userProfilePage.getEnterCity().type('Indore')
    userProfilePage.getEnterCountry().type('India')
    userProfilePage.getEnterPostCode().type('452001')
})
Then('I click on Update user', () => {
    userProfilePage.getUpdateUserBtn().click()
})
When('I click on Logout Button',()=>{
    loginpage.getLogoutBtn().click()
})