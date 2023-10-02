Feature: Quotation to a registered Insurance customer

    Scenario:To validate login to application with valid credentials
        Given I visit to website
        When I enter Email address on "lavish99neema@gmail.com" textbox
        Then I enter Password on "lavish123" textbox
        When I click on login buton
        Then I should validate email address 
        Then I should be on Broker Insurance WebPage
        When I click on Logout Button


    Scenario:To validate login to application with Invalid credentials
        Given I visit to website
        When I enter invalid Email address on "abc" textbox
        Then I enter invalid Password on "1234" textbox
        When I click on login buton
        Then I should see an error message for invalid login

