require "rails_helper"

RSpec.feature "UserViewsMainPages", type: :feature do
  it "displays link form and user's link list" do
    n = Random.rand(1..1000)
    visit "/"
    click_on("Sign Up")

    fill_in("Email", :with => "test#{n}@gmail.com")
    fill_in("Password", :with => "Seekrit")
    fill_in("Password Confirmation", :with => "Seekrit")
    click_on("Create Account")
    # As an authenticated user viewing the main page (links#index),
    visit "links#index"
    # I should see a simple form to submit a link.
    expect(page).to have_content("Submit a New Link")
    expect(page).to have_content("My Links")

    fill_in("Title", :with => "deep thoughts")
    # A valid URL location for the link
    fill_in("URL", :with => "http://www.deepthoughtsbyjackhandey.com/")
    click_on("Save Link")

    # A title for the link
    # Additionally, all links have a read status that is either true or false. This column will default to false.
    expect(page).to have_content("deep thoughts")
    expect(page).to have_content("http://www.deepthoughtsbyjackhandey.com/")

# Submitting an invalid link should result in an error message being displayed.
  fill_in("Title", :with => "more thoughts")
  # A valid URL location for the link
  fill_in("URL", :with => "kitten.m")
  click_on("Save Link")
  # expect(page).to have_content("Invalid url, please try a valid web address")
  # expect(flash[:error]).to be_present
  expect(page).to_not have_content("more thoughts")
  expect(page).to_not have_content("kitten.m")

#
# Once a link has been submitted, loading the index page should display all of my links.


  end

end
