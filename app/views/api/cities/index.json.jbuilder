@cities.each do |city|
    # if city.photo.attached?
        json.set! city.id do 
            json.extract! city, :id, :name, :title, :description, :do_description, :stay_description, :eat_description, :latitude, :longtitude
            # json.photoUrl url_for(city.photo)
        end
    # end

end