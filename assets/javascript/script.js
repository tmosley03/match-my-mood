

// 1. Make an ajax call to the omd to grab necessary data to be displayed

console.log("js is connected!");

genreIDs = {
  genres: [{
      id: 28,
      name: "Action"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 35,
      name: "Comedy"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentary"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Family"
    },
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 36,
      name: "History"
    },
    {
      id: 27,
      name: "Horror"
    },
    {
      id: 10402,
      name: "Music"
    },
    {
      id: 9648,
      name: "Mystery"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 10770,
      name: "TV Movie"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "War"
    },
    {
      id: 37,
      name: "Western"
    }
  ]
};

//========== Search by mood ==========//

// Mood values from user
userMood = [];

$("#submit").click(function (e) {
  //"discover API call search by genre (needs int)"
  e.preventDefault();
  console.log("click");

  var myGenre = $(".test").val();
  console.log(myGenre);

  var search_base_url =
    "https://api.themoviedb.org/3/discover/movie?api_key=6491e34e66e0d5744f3727caaf277987";

  $.ajax({
    //es6 replaces concatenation
    url: search_base_url + `&with_genres=${myGenre}`,
    method: "GET"
  }).then(function (response) {
    //console.log(response);
    //loop through the response and display
    //console.log(response.results[0].title);
    for (i = 0; i < 5; i++) {
      //pull poster
      var poster = "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path;
      console.log("poster " + poster);
      //get title
      var rawTitle = response.results[i].title;
      console.log("title " + rawTitle);
      var newTitle = $("<p>").text(rawTitle).addClass("title-text");
      //original release date
      var releaseDate = response.results[i].release_date;
      // console.log("release date " + releaseDate);
      var release = $("<p>").text(releaseDate).addClass("release-text");
      //overview
      var overview = response.results[i].overview;
      console.log(overview);
      var story = $("<p>").text(overview).addClass("overview-text");
      //create image element
      var newPoster = $("<img>").attr("src", poster).addClass("poster");
      //create empty div to store everything in
      var newDiv = $("<div>").addClass("movie-card");
      //add poster to div
      var movieThumb = (newDiv).append(newPoster);
      // add title
      var movieCard = $(movieThumb).append(story).append(release);

      //append to page

      $("#body").append(movieCard);
    }
  });
});


//====== happy search =======//

var getRandom = function (list) {
  return list[Math.floor((Math.random() * list.length))];
};

$("#happy").click(function(e) {
  //"discover API call search by genre (needs int)"
  e.preventDefault();
 // console.log("click");

  // genre ids: 12,28, 16,35, 10751, 14, 10402
  var happyIds = [12, 28, 16, 35, 10751, 14, 10402]


  var happyValue = getRandom(happyIds);

  console.log(happyValue);

  var search_base_url =
    "https://api.themoviedb.org/3/discover/movie?api_key=6491e34e66e0d5744f3727caaf277987";

  $.ajax({
    //es6 replaces concatenation
    url: search_base_url + `&with_genres=${happyValue}`,
    method: "GET"
  }).then(function(response) {
    //console.log(response);
    //loop through the response and display
    //console.log(response.results[0].title);
    for (i = 0; i < 5; i++) {
      //pull poster
      var poster =
        "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path;
     // console.log("poster " + poster);
      //get title
      var rawTitle = response.results[i].title;
      //console.log("title " + rawTitle);
      var newTitle = $("<p>")
        .text(rawTitle)
        .addClass("title-text");
      //original release date
      var releaseDate = response.results[i].release_date;
      // console.log("release date " + releaseDate);
      var release = $("<p>")
        .text(releaseDate)
        .addClass("release-text");
      //overview
      var overview = response.results[i].overview;
      //console.log(overview);
      var story = $("<p>")
        .text(overview)
        .addClass("overview-text");
      //create image element
      var newPoster = $("<img>")
        .attr("src", poster)
        .addClass("poster");
      //create empty div to store everything in
      var newDiv = $("<div>").addClass("movie-card");
      //add poster to div
      var movieThumb = newDiv.append(newPoster);
      // add title
      var movieCard = $(movieThumb)
        .append(story)
        .append(release);

      //append to page

      $("#body").append(movieCard);
    }
  });
});