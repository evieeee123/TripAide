class Api::CitiesController < ApplicationController

    def index
        @cities = City.all
        render "/api/cities/index"
    end

    def show
        @city = City.find_by(id: params[:id])
        if (@city)
            render "/api/cities/show"
        else
            render json: ["City doesn't exist!"]
        end
    end

end
