class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.where(city_id: params[:city_id])
        # @restaurants = Restaurant.all
        render "/api/restaurants/index"
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
        if (@restaurant)
            render "/api/restaurants/show"
        else
            render json: ["Restaurants doesn't exist!"]
        end
    end

end
