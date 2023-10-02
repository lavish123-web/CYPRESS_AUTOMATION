Feature: User's Profile

    Scenario:To validate User Profile
        Given I visit to website
        When I enter Email address on "lavish99neema@gmail.com" textbox
        Then I enter Password on "lavish123" textbox
        When I click on login buton
        Then I should validate email address
        Then I should be on Broker Insurance WebPage
        When I click on Profile Button
        Then I validate all fields under UserProfile
        When I click on Logout Button

    Scenario:To Edit User Profile
        Given I visit to website
        When I enter Email address on "lavish99neema@gmail.com" textbox
        Then I enter Password on "lavish123" textbox
        When I click on login buton
        Then I should validate email address
        Then I should be on Broker Insurance WebPage
        When I click on EditProfile Button
        Then I should be on Editing user profile page
        When I enter valid user data in Title, Surname, FirstName and phone fields
        Then I select DateofBirth, LicenseType, LicensePeriod and Occupation fields
        When I enter user data in Address, City, Country and Postcode fields
        Then I click on Update user
        When I click on Logout Button
