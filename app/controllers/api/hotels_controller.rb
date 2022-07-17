class Api::HotelsController < ApplicationController

    def index
        @hotels = Hotel.where(city_id: params[:city_id])
        # @hotels = Hotel.all
        render "/api/hotels/index"
    end

    def show
        @hotel = Hotel.find_by(id: params[:id])
        if (@hotel)
            render "/api/hotels/show"
        else
            render json: ["Hotels doesn't exist!"]
        end
    end

end
