class AddImgAndStateToCity < ActiveRecord::Migration[5.2]
  def change
    add_column :cities, :image_url_1, :string
    add_column :cities, :image_url_2, :string
    add_column :cities, :image_url_3, :string
    add_column :cities, :city_state, :string

  end
end
