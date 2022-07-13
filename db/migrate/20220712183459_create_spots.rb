class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :city_id, null: false
      t.string :name, null: false
      t.string :type, null: false
      t.text :description, null: false
      t.string :duration, null: false
      t.float :longtitude, null: false
      t.float :latitude, null: false

      t.timestamps
    end

    add_index :spots, :name, unique: true
    add_index :spots, :city_id, unique: true
  end
end
