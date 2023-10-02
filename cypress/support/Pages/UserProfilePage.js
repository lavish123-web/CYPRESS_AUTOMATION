class UserProfile {
    getProfileBtn() {
        return cy.get('#ui-id-4');
    }
    getTitle() {
        return cy.get('#tabs-4 > :nth-child(1) > strong');
    }
    getFirstName() {
        return cy.get('#tabs-4 > :nth-child(4) > strong');
    }
    getSurName() {
        return cy.get('#tabs-4 > :nth-child(7) > strong');
    }
    getPhone() {
        return cy.get(':nth-child(10) > strong');
    }
    getDateOfBirth() {
        return cy.get(':nth-child(13) > strong');
    }
    getLicenseType() {
        return cy.get('#tabs-4 > :nth-child(16) > strong');
    }
    getLicensePeriod() {
        return cy.get('#tabs-4 > :nth-child(19) > strong');
    }
    getOccupation() {
        return cy.get('#tabs-4 > :nth-child(22) > strong');
    }
    getDriverHistory() {
        return cy.get('#tabs-4 > :nth-child(25) > strong');
    }
    getAddress() {
        return cy.get('#tabs-4 > :nth-child(28)');
    }
    getEditProfileBtn() {
        return cy.get('#ui-id-5');
    }
    getValidateTextmsg() {
        return cy.get('h1');
    }
    getSelectUSerTitle() {
        return cy.get('#user_title');
    }
    getSelectUserSurname() {
        return cy.get('#user_surname');
    }
    getSelectUserFirstname() {
        return cy.get('#user_firstname');
    }
    getSelectUserPhone() {
        return cy.get('#user_phone');
    }
    getSelectUserdobYear() {
        return cy.get('#user_dateofbirth_1i');
    }
    getSelectUserdobMonth() {
        return cy.get('#user_dateofbirth_2i');
    }
    getSelectUserdobDate() {
        return cy.get('#user_dateofbirth_3i');
    }
    getSelectUserLicenseType() {
        return cy.get('#user_licencetype_f');
    }
    getSelectLicensePeriod() {
        return cy.get('#user_licenceperiod');
    }
    getSelectUserOccupation() {
        return cy.get('#user_occupation_id');
    }
    getEnterAdressStreet() {
        return cy.get('#user_address_attributes_street');
    }
    getEnterCity() {
        return cy.get('#user_address_attributes_city');
    }
    getEnterCountry() {
        return cy.get('#user_address_attributes_county');
    }
    getEnterPostCode() {
        return cy.get('#user_address_attributes_postcode');
    }
    getUpdateUserBtn() {
        return cy.get('[value="Update User"]');
    }
}
export default UserProfile;