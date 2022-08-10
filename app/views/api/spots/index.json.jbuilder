
@spots.each do |spot|

    json.set! spot.id do 
        json.extract! spot, :id, :city_id, :name, :spot_type, :description, :duration, :longtitude, :latitude, :image_url
        json.rating spot.avgrating
        json.review spot.review
    end
    
end