Feature: BBC Weather
    As user
    I want to expolre BBC web

    Scenario: Search for the City and check weather
        Given I visit "bbcWeb"
        Then I shloud see Page title "BBC - Home"
        And I click on "weather_tab"
        Then I expect to see URL containing "weather"
        And I expect to see placeholder text "Enter a town, city or UK postcode" at "search_box"
        Then I entered "Melbourne,Australia" at "search_box"
        Then I shloud see Page title "Melbourne - BBC Weather"
        And I clicked on day "1" to check weather


