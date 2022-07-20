class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    # def show
    #     if (Spot.find_by(id: params[:id]).reviews != [])
    #         @reviews = Spot.find_by(id: params[:id]).reviews
    #         render :show
    #     elsif (Hotel.find_by(id: params[:id]).reviews != [])
    #         @reviews = Hotel.find_by(id: params[:id]).reviews
    #         render :show
    #     elsif (Restaurant.find_by(id: params[:id]).reviews != [])
    #         @reviews = Restaurant.find_by(id: params[:id]).reviews
    #         render :show
    #     else
    #         @reviews = Review.all
    #         render :show
    #     end
    # end

    def create
        @review = Review.new(review_params)
        if @review.save
            
            render '/api/reviews/show'
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if (@review.user_id == current_user.id) && @review.update(review_params)
            render '/api/reviews/show'
        else
            render json: ['Update fails'], status: 401
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review
            @review.destroy
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    private

    def review_params
        params.require(:review).permit(:id, :user_id, :rating, :title, :body, :visit_date, :reviewable_id, :reviewable_type)
    end

end
