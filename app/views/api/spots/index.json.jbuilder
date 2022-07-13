
@spots.each do |spot|

    json.set! spot.id do 
        json.extract! spot, :id, :city_id, :name, :spot_type, :description, :duration, :longtitude, :latitude
    end

end