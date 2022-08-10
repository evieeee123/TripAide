json.restaurant do
    json.extract! @restaurant, :id, :city_id, :name, :price_range, :description, :cuisines, :special_diets, :meals, :phonenum, :res_address, :longtitude, :latitude, :image_url
    json.rating @restaurant.avgrating
    json.review @restaurant.review
end

json.reviews do 
    reviews = @restaurant.reviews.includes(:user)
    reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :user_id, :rating, :title, :body, :visit_date, :reviewable_id, :reviewable_type
            json.reviewer review.user.username
        end
    end
end