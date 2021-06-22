class User < ApplicationRecord
    # has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :movies, through: :reviews

    def movie_names
      movies.pluck(:name)
    end 
    
end
