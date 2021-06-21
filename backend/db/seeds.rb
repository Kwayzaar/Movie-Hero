# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
User.destroy_all
Movie.destroy_all


user1 = User.create(username: "elee" first_name: "Eric", family_name:"Lee")
user2 = User.create(username: "SLy" first_name: "Steven", family_name:"Ly")
user3 = User.create(username: "Snitchie" first_name: "Meagan", family_name:"Ritchie")

movie1 = Movie.create(name: "Kill Bill: Vol.1", image_url: "https://flxt.tmsimg.com/assets/p32988_p_v10_ae.jpg")
movie2 = Movie.create(name: "Prisoners", image_url: "https://flxt.tmsimg.com/assets/p9872448_p_v10_ah.jpg")

Review.create(user: user1, movie: movie1, score: 5)
user2.reviews.create(movie: movie1, score: 4)
movie2.reviews.create(user: user3, score: 3)
