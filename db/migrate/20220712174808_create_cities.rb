class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.text :do_description, null: false
      t.text :stay_description, null: false
      t.text :eat_description, null: false

      t.timestamps
    end

    add_index :cities, :name, unique: true
  end
end
