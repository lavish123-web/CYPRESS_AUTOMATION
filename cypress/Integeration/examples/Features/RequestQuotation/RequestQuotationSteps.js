import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../../support/Pages/LoginPage";
import RequestQuotaion from "../../../../support/Pages/RequestQuoationPage";
import chai from "chai";

const loginpage = new LoginPage();
const requestQuotationPage = new RequestQuotaion();

var emailId, expPremium, expIncidentsValue, expVechleValue='', expMilegaeValue, expEstimatedValue;
let expPublicPlaceValue='';

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
When('I click on Request Quotation Button', () => {
    requestQuotationPage.getRequestQuotationBtn().click()
})
Then('I should see Request a Quoation text message', () => {
    requestQuotationPage.getValidateRequestaQuotationText().should('have.text', 'Request a quotation')
})
Then('I should see policyexcess is by default 16%', () => {
    requestQuotationPage.getValidatePolicyexcessText().should('have.text', 'Policyexcess')
})
When('I click on BreakDown cover dropdown and select at home', () => {
    requestQuotationPage.getValidateBreakdownCoverField().should('have.text', 'Breakdowncover')
    requestQuotationPage.getSelectBreakdownCoverDropdown().select('At home').should('have.value', '3')
})
Then('I select WindScreenRepair field', () => {
    requestQuotationPage.getValidateWindScreenRepairField().should('have.text', 'Windscreenrepair')
    requestQuotationPage.getSelectWindScreenField().check().should('be.checked')
})
Then('I should see ExcessPaid Fees is 5%', () => {
    requestQuotationPage.getValidateExcesspaidField().should('have.text', 'Excesspaid')
})
When('I enter valid {string} in incidents', (incidentsValue) => {
    requestQuotationPage.getEnterIncidents().type(incidentsValue)
    expIncidentsValue = parseInt(incidentsValue)
})
When('I enter valid {string} in Registration', (vechileReg) => {
    requestQuotationPage.getEnterVechileRegistration().type(vechileReg)
    expVechleValue = vechileReg
})
When('I enter valid {string} in AnnualMileage', (annualMileage) => {
    requestQuotationPage.getEnterAnnualMileage().type(annualMileage)
    expMilegaeValue = parseInt(annualMileage)
})
When('I enter valid {string} in EstimateValue', (estimatedValue) => {
    requestQuotationPage.getEnterEstimatedValue().type(estimatedValue)
    expEstimatedValue = parseInt(estimatedValue)
})
Then('I should select Parking Location {string}', (publicPlace) => {
    requestQuotationPage.getSelectParkingLocation().select(publicPlace).should('have.value', 'Public place')
    expPublicPlaceValue=publicPlace
    
})
When('I select Start of policy date {string} {string} {string}', (year, month, date) => {
    requestQuotationPage.getSelectStartofPolicyyear().select(year).should('have.value', '2023')
    requestQuotationPage.getSelectStartofPolicyMonth().select(month).should('have.value', '3')
    requestQuotationPage.getSelectStartofPolicyDate().select(date).should('have.value', '3')
})
When('I click on calculate Premium Button', () => {
    requestQuotationPage.getCalculatePremiumBtn().click()
})
Then('I should see calcuated premium for a insurance policy', () => {
    requestQuotationPage.getCalculatedPremium().then((actualPremium) => {
       let expPremium = actualPremium.text()
    })
})
When('I click on Save Quotation Button', () => {
    requestQuotationPage.getSaveQuotationBtn().click()
})
Then('I should see success message you have saved this Quotation', () => {
    requestQuotationPage.getValidateSucessmsg().should('have.text', 'You have saved this quotation!')
})
Then('I should see Identifcation number', () => {
    requestQuotationPage.getValidateIdentificationText().should('have.text', 'Your identification number is :  ')
    cy.wait(3000);
    cy.go('back')
})
When('I click on Retrieve Quotation Button', () => {
    requestQuotationPage.getRetrieveQuotationBtn().click()
})
Then('I enter the Identifcation number', () => {
    requestQuotationPage.getIdentificationNumberTextBox().type('30740')
})
When('I click on Retrieve Button', () => {
    requestQuotationPage.getClickOnRetrieveBtn().click()
})
Then('I validate insurance Name coulmns and its fields', () => {
    requestQuotationPage.getInsuranceName().should('have.text', 'Insurance Name')
    requestQuotationPage.getBreakdownCover().should('have.text', 'Breakdowncover')
    requestQuotationPage.getWindScreenRepair().should('have.text', 'Windscreenrepair')
    requestQuotationPage.getUserId().should('have.text', 'user_id')
    requestQuotationPage.getIncidents().should('have.text', 'incidents')
    requestQuotationPage.getRegistration().should('have.text', 'Registration')
    requestQuotationPage.getAnnualMileage().should('have.text', 'Annual mileage')
    requestQuotationPage.getEstimatedValue().should('have.text', 'Estimated value')
    requestQuotationPage.getParkingLocation().should('have.text', 'Parking Location')
    requestQuotationPage.getStartofPolicy().should('have.text', 'Start of policy')
})
Then('I validate and compare all the values with the entered inputs in request Quoation', () => {
    requestQuotationPage.getValueHeading().should('have.text', 'Value')
    requestQuotationPage.getWindScreenRepairValue().should('have.text', 'Yes')
    requestQuotationPage.getUserIdValue().should('have.text', '69371')
    requestQuotationPage.getIncidentsValue().should('have.text', expIncidentsValue)
    requestQuotationPage.getRegistrationValue().should('have.text',expVechleValue)
    requestQuotationPage.getAnnualMileageValue().should('have.text', expMilegaeValue)
    requestQuotationPage.getactualEstimatedValue().should('have.text', expEstimatedValue)
    requestQuotationPage.getParkingLocationValue().should('have.text','Public place')
    requestQuotationPage.getStartOfPolicyValue().should('have.text','2023.3.3')
})
When('I click on Logout Button',()=>{
    loginpage.getLogoutBtn().click()
})