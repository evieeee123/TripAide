class Review < ApplicationRecord

    validates :title, :body, :visit_date, presence: true
    validates :rating, presence: true, inclusion: { in: (1..5), message: "must be selected in order to submit your review" }

    belongs_to :reviewable, :polymorphic => true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
