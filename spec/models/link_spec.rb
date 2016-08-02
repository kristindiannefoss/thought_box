require 'rails_helper'

RSpec.describe Link, type: :model do
  context "should allow a valid url" do
    it "saves the link" do
      expect(Link.all.count).to eq 0
      link = Link.create(title: "new", url: "http://www.deepthoughtsbyjackhandey.com/" )

      expect(Link.all.count).to eq 1
    end
  end

  # it "should not allow blank as url" do
  #   @link.url = ""
  #   expect(@link).not_to be_valid
  # end
end
