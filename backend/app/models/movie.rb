class Movie < ApplicationRecord
  has_many :reviews 
  has_many :users, through: :reviews 

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end 

  def avg_score
    return 0 unless reviews.size.positive?

    reviews.average(:score).to_f.round(0)
  end 
  
end
