Review.destroy_all
Movie.destroy_all
User.destroy_all



Movie.create([
  {
    name: "Kill Bill: Vol.1", image_url: "https://flxt.tmsimg.com/assets/p32988_p_v10_ae.jpg"
  },
  {
    name: "Sicario", image_url:"https://img01.mgo-images.com/image/thumbnail/v2/content/MMV50ADF5767F45C965C6E8454F2847A4369.jpeg"
  },
  {
    name: "Goodfellas", image_url: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  }
])
