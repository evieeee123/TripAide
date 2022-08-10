class AddImg < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :image_url, :string
    add_column :hotels, :image_url, :string
    add_column :restaurants, :image_url, :string
  end
end
