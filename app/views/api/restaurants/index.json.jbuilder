
@restaurants.each do |restaurant|

    json.set! restaurant.id do 
        json.extract! restaurant, :id, :city_id, :name, :price_range, :description, :cuisines, :special_diets, :meals, :phonenum, :res_address, :longtitude, :latitude, :image_url
        json.rating restaurant.avgrating
        json.review restaurant.review

    end

end