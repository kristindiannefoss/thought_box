require 'rails_helper'

RSpec.feature "UserSeesLogin", type: :feature do
  scenario "user navigates to site and sees login or register" do

      # As an unauthenticated user,
      # when I visit the root of the application,
      # I should be redirected to a page which prompts me to "Log In or Sign Up".
      visit "/"

      assert page.has_content?("Log In")
      assert page.has_content?("Sign Up")
  end


end
