class City < ApplicationRecord

    validates :name, presence: true, uniqueness: true
    validates :title, :description, :do_description, :stay_description, :eat_description, presence: true

    has_many :spots,
        primary_key: :id,
        foreign_key: :city_id,
        class_name: :Spot
end
