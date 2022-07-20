class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :rating, null: false
      t.text :title, null: false
      t.text :body, null: false
      t.date :visit_date, null: false
      t.references :reviewable, polymorphic: true

      t.timestamps
    end
  end
end
