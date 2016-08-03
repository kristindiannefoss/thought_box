require 'rails_helper'

RSpec.describe Link, type: :model do
  context "allow a valid url" do
    it "saves the link" do
      expect(Link.all.count).to eq 0
      link = Link.create(title: "new", url: "http://www.deepthoughtsbyjackhandey.com/" )

      expect(Link.all.count).to eq 1
    end
  end

  context "allow a valid url" do
    it "saves the link" do
      expect(Link.all.count).to eq 0
      link = Link.create(title: "blank", url: "" )

      expect(Link.all.count).to eq 0
    end
  end

end
