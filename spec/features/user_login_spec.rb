require 'rails_helper'

RSpec.feature "UserLogin", type: :feature do
  scenario "user navigates to site and sees login or register" do
    # As an unauthenticated user,
    # when I visit the root of the application,
    # I should be redirected to a page which prompts me to "Log In or Sign Up".
    visit "/"

    expect(page).to have_content("Log In")
    expect(page).to have_content("Sign Up")
  end

  scenario "user clicks on sign_up" do
    # Upon submitting this information, I should be logged in via a cookie
    #  and redirected to the "Links Index" page.
    visit "/"
    click_on("Sign Up")
    #
    # If I click "Sign Up", I should be taken to a user form where I can enter an
    # email address, a password, and a password confirmation.

    fill_in('Email', :with => 'test@gmail.com')
    fill_in('Password', :with => 'Seekrit')
    fill_in('Password Confirmation', :with => 'Seekrit')

    # I cannot sign up with an email address that has already been used.
    # Password and confirmation must match.

    click_on("Create Account")

    expect(current_path).to eq "/dashboard"
    expect(page).to have_content('test@gmail.com')
    expect(page).to_not have_link "Login"
    expect(page).to have_link "Logout"
  end
end
