class FixIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :spots, :city_id
    add_index :spots, :city_id
  end
end
