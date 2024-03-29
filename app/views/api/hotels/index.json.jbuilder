
@hotels.each do |hotel|

    json.set! hotel.id do 
        json.extract! hotel, :id, :city_id, :name, :description, :phonenum, :address, :longtitude, :latitude, :image_url
        json.rating hotel.avgrating
        json.review hotel.review
    end

end