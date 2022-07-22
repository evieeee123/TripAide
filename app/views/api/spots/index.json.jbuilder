
@spots.each do |spot|

    json.set! spot.id do 
        json.extract! spot, :id, :city_id, :name, :spot_type, :description, :duration, :longtitude, :latitude
        json.rating spot.avgrating
    end
    
end