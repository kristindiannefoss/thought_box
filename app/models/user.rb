require 'bcrypt'

class User < ActiveRecord::Base
  validates_uniqueness_of :email
  validates_confirmation_of :password, message: 'password should match'
  has_secure_password
  has_many :links
end
