
@hotels.each do |hotel|

    json.set! hotel.id do 
        json.extract! hotel, :id, :city_id, :name, :description, :phonenum, :address, :longtitude, :latitude
    end

end