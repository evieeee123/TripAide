class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :city_id, null: false
      t.text :description
      t.string :price_range
      t.string :cuisines
      t.string :special_diets
      t.string :meals
      t.string :phonenum
      t.string :res_address
      t.float :longtitude, null: false
      t.float :latitude, null: false

      t.timestamps
    end

    add_index :restaurants, :name, unique: true
  end
end
