require 'rails_helper'

RSpec.feature "UserViewsMainPages", type: :feature do
  it "displays link form and user's link list" do
    # As an authenticated user viewing the main page (links#index),
    # I should see a simple form to submit a link.
    # User.create(email: "tester@gmail.com", password: "pass")
    # user_1 = User.first
    # ApplicationController.any_instance.stubs(:current_user).returns(user_1)
    visit "/"
    click_on("Sign Up")

    fill_in('Email', :with => 'test2@gmail.com')
    fill_in('Password', :with => 'Seekrit')
    fill_in('Password Confirmation', :with => 'Seekrit')

    visit "links#index"
    assert page.has_content?('Submit a New Link')
    assert page.has_content?('My Links')

# A valid URL location for the link
# A title for the link
# Additionally, all links have a read status that is either true or false. This column will default to false.
#
# Submitting an invalid link should result in an error message being displayed.
#
# Hint: Use Ruby's built in URI.parse method to determine if a link is a valid URL or not. This StackOverflow post has more information. Alternatively, you could use a gem like this one.
#
# Once a link has been submitted, loading the index page should display all of my links.


  end

end
