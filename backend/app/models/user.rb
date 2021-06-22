class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :movies, through: :reviews

    validates :username, uniqueness: true

    def movie_names
      movies.pluck(:name)
    end 
    
end
