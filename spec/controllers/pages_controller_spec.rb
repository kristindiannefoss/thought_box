require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  context "pages#home" do
    it "displays home page" do
      get :home
      expect(response.status).to eq(200)
      expect(response).to render_template :home
    end
  end
end
