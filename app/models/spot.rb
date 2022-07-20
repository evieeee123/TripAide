class Spot < ApplicationRecord

    validates :name, presence: true, uniqueness: true
    validates :spot_type, :description, :duration, :longtitude, :latitude, presence: true

    belongs_to :city,
        primary_key: :id,
        foreign_key: :city_id,
        class_name: :City

    has_many :reviews, :as => :reviewable
    
end
