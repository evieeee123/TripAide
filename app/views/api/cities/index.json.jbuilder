@cities.each do |city|

    json.set! city.id do 
        json.extract! city, :id, :name, :title, :description, :do_description, :stay_description, :eat_description, :latitude, :longtitude
    end

end