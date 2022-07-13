class City < ApplicationRecord

    validates :name, presence: true, uniqueness: true
    validates :title, :description, :do_description, :stay_description, :eat_description, presence: true


end
