require 'rails_helper'

RSpec.describe User, type: :model do
  context "a user can be created" do
    it "creates and saves a user" do
      n = Random.rand(1..1000)
      expect(User.all.count).to eq 0
      user1 = User.create(email: "test#{n}@gmail.com", password: "Seekrit")
      expect(User.all.count).to eq 1
    end
    it "has an email for the user" do
      n = Random.rand(1..1000)
      user1 = User.create(email: "test#{n}@gmail.com", password: "Seekrit")
      expect(user1.email).to eq "test#{n}@gmail.com"
    end
  end

end
