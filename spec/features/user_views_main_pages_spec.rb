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
    assert page.has_content?("Submit a New Link")
    assert page.has_content?("My Links")

    fill_in("Title", :with => "deep thoughts")
    fill_in("URL", :with => "http://www.deepthoughtsbyjackhandey.com/")
    click_on("Save Link")

    assert page.has_content?("deep thoughts")
    assert page.has_content?("http://www.deepthoughtsbyjackhandey.com/")

    # A valid URL location for the link



# A title for the link
# Additionally, all links have a read status that is either true or false. This column will default to false.
#
# Submitting an invalid link should result in an error message being displayed.
#
# Hint: Use Ruby"s built in URI.parse method to determine if a link is a valid URL or not. This StackOverflow post has more information. Alternatively, you could use a gem like this one.
#
# Once a link has been submitted, loading the index page should display all of my links.


  end

end
