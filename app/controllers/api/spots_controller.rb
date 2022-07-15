class Api::SpotsController < ApplicationController

    def index
        @spots = Spot.where(city_id: params[:city_id])
        render "/api/spots/index"
    end

    def show
        @spot = Spot.find_by(id: params[:id])
        if (@spot)
            render "/api/spots/show"
        else
            render json: ["Attraction doesn't exist!"]
        end
    end

end
