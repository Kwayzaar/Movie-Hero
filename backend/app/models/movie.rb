class Movie < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

    def avg_score
    return 0 unless reviews.size.positive?

    reviews.average(:score).to_f.round(0)
  end 
end
