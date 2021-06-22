class MoviesController < ApplicationController
  def index
    @movies = Movie.all

    render json: @movies
  end 

  def show
    @movie = Movie.find(params[:id])

    render json: @movie, include: :powers, methods: [:]
  end 

  def destroy
    @movie = Movie.find params[:id] 
    @movie.destroy
  end 

  def new
    @movie = Movie.new 

    render json: @movie 
  end 

  def create
    @movie = Movie.create params[:title], params[:director], params[:release_year], params[:poster_url]
  end 
  
end
