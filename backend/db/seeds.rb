# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "elee" first_name: "Eric", family_name:"Lee")
user2 = User.create(username: "SLy" first_name: "Steven", family_name:"Ly")
user3 = User.create(username: "Snitchie" first_name: "Meagan", family_name:"Ritchie")

movie1 = Movie.create(name: "Kill Bill")
movie2 = Movie.create(name: "Forrest Gump")

