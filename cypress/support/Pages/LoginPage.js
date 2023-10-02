class LoginPage {
    getSearchBox() {
        return cy.get('#APjFqb');
    }
    getEmailTextBox() {
        return cy.get('#email')
    }
    getPasswordTextBox() {
        return cy.get('#password')
    }
    getLoginBtn() {
        return cy.get('[name="submit"]');
    }
    getTextHomeTitlepage() {
        return cy.get('#tabs-1 > h2');
    }
    getInvalidCredentialErrorText() {
        return cy.get('span > b');
    }
    getValidateEmailId()
    {
        return cy.xpath('//div/h4')
    }
    getLogoutBtn()
    {
        return cy.get('[value="Log out"]')
    }
}
export default LoginPage;