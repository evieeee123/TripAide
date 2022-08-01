class Hotel < ApplicationRecord

    validates :name, presence: true, uniqueness: true
    validates :longtitude, :latitude, presence: true

    belongs_to :city,
        primary_key: :id,
        foreign_key: :city_id,
        class_name: :City

    has_many :reviews, :as => :reviewable

    def avgrating
        sum = 0
        total = self.reviews.length
        self.reviews.each do |review|
            sum += review.rating
        end
        return 0 if total == 0 
        sum / total
    end

end
