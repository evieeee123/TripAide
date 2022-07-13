class Api::CitiesController < ApplicationController

    def index
        @cities = City.all
        render "/api/cities/index"
    end

    def show
        @city = City.find_by(id: params[:id])
        # debugger
        
        render "/api/cities/show"
        
    end

end
