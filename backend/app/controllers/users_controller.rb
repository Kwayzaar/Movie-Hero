class UsersController < ApplicationController
    
  skip_before_action :authorized, only: [:create, :login]

  def index
    @users = User.all

    render json: @users, status: :ok
    # include: [:reviews], methods: [:movie_names]
  end 

  def create 
    @user = User.create(user_params)

    render json: @user, status: :created
  end

  def profile 
    render json: @user
  end

  def login 
    @user = User.find_by(username: params[:user][:username])

    if @user && @user.authenticate(params[:user][:password])
      @token = JWT.encode({user_id: @user.id}, Rails.application.secrets.secret_key_base[0])

      render json: {user: @user, token: @token}
    else
      render json: {error: "Invalid Credentials"}, status: :unauthorized
    end
  end

  private

  def user_params
      params.require(:user).permit(:first_name, :last_name, :username, :password)
  end
end
