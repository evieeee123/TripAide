class FixIndexOfReview < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :user_id
    add_index :reviews, :user_id
  end
end
