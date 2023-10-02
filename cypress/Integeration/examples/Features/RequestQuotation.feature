Feature: Customer to request for Quotation and retrieve for Quotation

    Scenario:  User is Request for Quotation
        Given I visit to website
        When I enter Email address on "lavish99neema@gmail.com" textbox
        Then I enter Password on "lavish123" textbox
        When I click on login buton
        Then I should validate email address 
        Then I should be on Broker Insurance WebPage
        When I click on Request Quotation Button
        Then I should see Request a Quoation text message
        Then I should see policyexcess is by default 16%
        When I click on BreakDown cover dropdown and select at home
        Then I select WindScreenRepair field
        Then I should see ExcessPaid Fees is 5%
        When I enter valid "1" in incidents
        When I enter valid "MH01VV6759" in Registration
        When I enter valid "20" in AnnualMileage
        When I enter valid "300000" in EstimateValue
        Then I should select Parking Location "Public Place"
        When I select Start of policy date "2023" "March" "3"
        When I click on calculate Premium Button
        Then I should see calcuated premium for a insurance policy
        When I click on Save Quotation Button
        Then I should see success message you have saved this Quotation
        Then I should see Identifcation number
        When I click on Logout Button

    Scenario: User is Retrieve for Quotation
        Given I visit to website
        When I enter Email address on "lavish99neema@gmail.com" textbox
        Then I enter Password on "lavish123" textbox
        When I click on login buton
        Then I should validate email address 
        Then I should be on Broker Insurance WebPage
        When I click on Retrieve Quotation Button
        Then I enter the Identifcation number
        When I click on Retrieve Button
        Then I validate insurance Name coulmns and its fields
        Then I validate and compare all the values with the entered inputs in request Quoation