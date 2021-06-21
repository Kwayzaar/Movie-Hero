class ReviewsController < ApplicationController
  belongs_to :user
  belongs_to :movie
end
