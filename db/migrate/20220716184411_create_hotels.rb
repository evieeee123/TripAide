class CreateHotels < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels do |t|
      t.string :name, null: false
      t.integer :city_id, null: false
      t.text :description
      t.text :address
      t.string :phonenum
      t.float :longtitude, null: false
      t.float :latitude, null: false

      t.timestamps
    end

    add_index :hotels, :name, unique: true
    add_index :hotels, :city_id
  end
end
