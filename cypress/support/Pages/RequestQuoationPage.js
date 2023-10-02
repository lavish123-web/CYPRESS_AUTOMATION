class RequestQuotaion {

    getRequestQuotationBtn() {
        return cy.get('#newquote');
    }
    getValidateRequestaQuotationText() {
        return cy.get('#tabs-2 > h2');
    }
    getValidatePolicyexcessText() {
        return cy.get('#new_quotation > :nth-child(4) > label');
    }
    getValidateBreakdownCoverField() {
        return cy.get('#new_quotation > :nth-child(5) > label');
    }
    getSelectBreakdownCoverDropdown() {
        return cy.get('#quotation_breakdowncover');
    }
    getValidateWindScreenRepairField() {
        return cy.get('[for="quotation_windscreenrepair"]');
    }
    getSelectWindScreenField() {
        return cy.get('#quotation_windscreenrepair_t');
    }
    getValidateExcesspaidField() {
        return cy.get('#quotation_excess > label');
    }
    getEnterIncidents() {
        return cy.get('#quotation_incidents');
    }
    getEnterVechileRegistration() {
        return cy.get('[name="registration"]');
    }
    getEnterAnnualMileage() {
        return cy.get('#quotation_vehicle_attributes_mileage');
    }
    getEnterEstimatedValue() {
        return cy.get('#quotation_vehicle_attributes_value');
    }
    getSelectParkingLocation() {
        return cy.get('#quotation_vehicle_attributes_parkinglocation');
    }
    getSelectStartofPolicyyear() {
        return cy.get('#quotation_vehicle_attributes_policystart_1i');
    }
    getSelectStartofPolicyMonth() {
        return cy.get('#quotation_vehicle_attributes_policystart_2i');
    }
    getSelectStartofPolicyDate() {
        return cy.get('#quotation_vehicle_attributes_policystart_3i');
    }
    getCalculatePremiumBtn() {
        return cy.get('.btn-default');
    }
    getCalculatedPremium() {
       // return cy.get('#calculatedpremium');
       return cy.xpath('(//p/text()[2])[1]')
    }
    getSaveQuotationBtn() {
        return cy.get('#new_quotation > .actions > .btn-success');
    }
    getValidateSucessmsg() {
        return cy.get('body > :nth-child(1)');
    }
    getValidateIdentificationText() {
        return cy.get(':nth-child(3)');
    }
    getRetrieveQuotationBtn() {
        return cy.get('#ui-id-3');
    }
    getIdentificationNumberTextBox() {
        return cy.get('[placeholder="identification number"]');
    }
    getClickOnRetrieveBtn() {
        return cy.get('#getquote');
    }
    getRetrieveQuotationText() {
        return cy.get('font');
    }
    getInsuranceName() {
        return cy.get('tbody > :nth-child(1) > :nth-child(1) > b');
    }
    getBreakdownCover() {
        return cy.get('tbody > :nth-child(2) > :nth-child(1) > b');
    }
    getWindScreenRepair() {
        return cy.get(':nth-child(3) > :nth-child(1) > b');
    }
    getUserId() {
        return cy.get(':nth-child(4) > :nth-child(1) > b')
    }
    getIncidents() {
        return cy.get(':nth-child(5) > :nth-child(1) > b');
    }
    getRegistration() {
        return cy.get(':nth-child(6) > :nth-child(1) > b');
    }
    getAnnualMileage() {
        return cy.get(':nth-child(7) > :nth-child(1) > b');
    }
    getEstimatedValue() {
        return cy.get(':nth-child(8) > :nth-child(1) > b');
    }
    getParkingLocation() {
        return cy.get(':nth-child(9) > :nth-child(1) > b');
    }
    getStartofPolicy() {
        return cy.get(':nth-child(10) > :nth-child(1) > b');
    }
    getValueHeading() {
        return cy.get('tbody > :nth-child(1) > :nth-child(2) > b');
    }
    getWindScreenRepairValue() {
        return cy.get('tbody > :nth-child(3) > :nth-child(2)');
    }
    getUserIdValue() {
        return cy.get('tbody > :nth-child(4) > :nth-child(2)');
    }
    getIncidentsValue() {
        return cy.get(':nth-child(5) > :nth-child(2)');
    }
    getRegistrationValue() {
        return cy.get(':nth-child(6) > :nth-child(2)');
    }
    getAnnualMileageValue() {
        return cy.get(':nth-child(7) > :nth-child(2)');
    }
    getactualEstimatedValue() {
        return cy.get(':nth-child(8) > :nth-child(2)');
    }
    getParkingLocationValue() {
        return cy.get(':nth-child(9) > :nth-child(2)');
    }
    getStartOfPolicyValue() {
        return cy.get(':nth-child(10) > :nth-child(2)');
    }
}
export default RequestQuotaion;