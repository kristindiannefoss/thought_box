require "rails_helper"

RSpec.feature "User marks as read", type: :feature do
  # setup do
  xscenario "user sees a button they can click to mark a link", js: true do
    n = Random.rand(1..1000)
    @user = User.create(email: "test#{n}@gmail.com", password: "Seekrit")
    @link = Link.create(title: "deep thoughts",
    url: "http://www.deepthoughtsbyjackhandey.com/",
    user_id: @user.id)
    allow_any_instance_of(Api::V1::LinksController).to receive(:current_user).and_return(@user)
    allow_any_instance_of(LinksController).to receive(:current_user).and_return(@user)
  # end
    visit "/"
    click_on("Log In")
    fill_in('E-Mail', :with => @user.email)
    fill_in('Password', :with => @user.password)
    # find(".btn").click
    click_on("Log in")
# save_and_open_page
    wait_for_ajax

    expect(page).to have_content(@link.title)
    expect(page).to have_content(@link.url)
    expect(page).to have_content("Mark as Read")

    find(".read-button").click
    wait_for_ajax

    it {should have_css('tr.been-there') }
  end
end
