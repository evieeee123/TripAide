json.hotel do
    json.extract! @hotel, :id, :city_id, :name, :description, :phonenum, :address, :longtitude, :latitude, :image_url
    json.rating @hotel.avgrating
    json.review @hotel.review

end

json.reviews do 
    reviews = @hotel.reviews.includes(:user)
    reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :user_id, :rating, :title, :body, :visit_date, :reviewable_id, :reviewable_type
            json.reviewer review.user.username
        end
    end
end