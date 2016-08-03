require 'rails_helper'

RSpec.describe LinksController, type: :controller do
  before do
    n = Random.rand(1..1000)
    @user1 = User.create(email: "test#{n}@gmail.com", password: "Seekrit")
    link1 = Link.create(title: "new", url: "http://www.deepthoughtsbyjackhandey.com/", user_id: @user1.id )
    link2 = Link.create(title: "next", url: "http://www.jackhandey.com/", user_id: @user1.id )
    # ApplicationController.any_instance.stub(:current_user).and_return(@user)
    allow_any_instance_of(LinksController).to receive(:current_user).and_return(User.last)
  end

  context "links#index" do
    it "displays links index" do
      get :index
      expect(response.status).to eq(200)
      expect(response).to render_template :index
      expect(Link.all.count).to eq(2)
    end
  end


end
