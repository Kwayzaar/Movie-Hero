Review.destroy_all
Movie.destroy_all
User.destroy_all



Movie.create([
  {
    name: "Kill Bill: Vol.1", 
    director: "Quentin Tarantino",
    release_year: 1992,
    image_url: "https://flxt.tmsimg.com/assets/p32988_p_v10_ae.jpg",
    description: "Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who swears revenge on a team of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader, Bill (David Carradine), after they try to kill her and her unborn child. Her journey takes her to Tokyo, where she battles the yakuza.",
    genre: "Action, Crime, Drama"
  },
  {
    name: "Sicario", 
    director: "Denis Villanueve", 
    release_year: 1992,
    image_url:"https://img01.mgo-images.com/image/thumbnail/v2/content/MMV50ADF5767F45C965C6E8454F2847A4369.jpeg",
    description: "",
    genre: ""
  },
  {
    name: "Goodfellas", 
    director: "Martin Scorcese",
    release_year: 1992,
    image_url: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description: "",
    genre: ""
  },
  {
    name: "Reservoir Dogs", 
    director: "Quentin Tarantino", 
    release_year: 1992, 
    image_url: "https://images-na.ssl-images-amazon.com/images/I/91fyNVbnvmL._SL1500_.jpg",
    description: "",
    genre: ""
  },
  {
    name: "Taxi Driver", 
    director: "Martin Scorcese", 
    release_year: 1976, 
    image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Taxi_Driver_%281976_film_poster%29.jpg/220px-Taxi_Driver_%281976_film_poster%29.jpg",
    description: "",
    genre: ""
  },
  {
    name: "Pulp Fiction", 
    director: "Quentin Tarantino", 
    release_year: 1994, 
    image_url: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
    description: "",
    genre: ""
  },
  {
    name: "Dune", 
    director: "Denis Villanueve", 
    release_year: 2021, 
    image_url:"https://upload.wikimedia.org/wikipedia/en/6/67/Dune_2020_movie_poster.jpg",
    description: "",
    genre: ""
  },
  {
    name: "Raging Bull", 
    director: "Martin Scorcese", 
    release_year: 1980, 
    image_url: "https://thesouloftheplot.files.wordpress.com/2013/03/poster_ragingbull.jpg",
    description: "",
    genre: ""
  },
  {
    name: "Prisoners", 
    director: "Denis Villanueve", 
    release_year: 2013, 
    image_url:"https://flxt.tmsimg.com/assets/p9872448_p_v10_ah.jpg",
    description: "",
    genre: ""
  },
  {
    name: "Kill Bill: Vol.2", 
    director: "Quentin Tarantino", 
    release_year: 2004, 
    image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Kill_Bill_Volume_2.png/220px-Kill_Bill_Volume_2.png",
    description: "",
    genre: ""
  },
  {
    name: "Enemy", 
    director: "Denis Villanueve", 
    release_year: 2013, 
    image_url:"https://upload.wikimedia.org/wikipedia/en/0/0d/Enemy_poster.jpg",
    description: "",
    genre: ""
  }
])
