class Link < ActiveRecord::Base
    validates :url, :url => true
    belongs_to :user

    def self.sort_alpha
      all.order()
    end
end
