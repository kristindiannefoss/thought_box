require "rails_helper"

RSpec.feature "UserViewsLinkPage", type: :feature do
  it "displays link form and user's link list" do
    n = Random.rand(1..1000)
    visit "/"
    click_on("Sign Up")

    fill_in("Email", :with => "test#{n}@gmail.com")
    fill_in("Password", :with => "Seekrit")
    fill_in("Password Confirmation", :with => "Seekrit")
    click_on("Create Account")
    visit "links#index"
    fill_in("Title", :with => "deep thoughts")
    fill_in("URL", :with => "http://www.deepthoughtsbyjackhandey.com/")
    click_on("Save Link")
    fill_in("Title", :with => "stuff thoughts")
    fill_in("URL", :with => "http://www.thomasnelson.com/man-stuff")
    click_on("Save Link")

    link1 = Link.first

    within(:css, "#{}links-#{link1.id}") do
      click_on("Mark as Read")
    end

    expect(page).to have_content("deep thoughts")
    expect(page).to have_content("http://www.deepthoughtsbyjackhandey.com/")
    expect(page).to have_content("stuff thoughts")
    expect(page).to have_content("http://www.thomasnelson.com/man-stuff")

  end

end
