console.log("js is connected!");
//========== global varriables ============================
var getRandom = function(list) {
  return list[Math.floor(Math.random() * list.length)];
};

//=========================================================

genreIDs = {
  genres: [
    {
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

//========== Search by mood generic api call ==========//

$("#submit").click(function(e) {
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
  }).then(function(response) {
    for (i = 0; i < 5; i++) {
      //pull poster
      var poster =
        "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path;
      console.log("poster " + poster);
      //get title
      var rawTitle = response.results[i].title;
      console.log("title " + rawTitle);
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
      console.log(overview);
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

//====== happy search =======//

$("#happy").click(function(e) {
  e.preventDefault();

  var happyIds = [12, 28, 16, 35, 10751, 14, 10402];
  var happyValue = getRandom(happyIds);
  // keep this line only if you want to empty the results area with every search.
  $("#movie-target").html("");

  var search_base_url =
    "https://api.themoviedb.org/3/discover/movie?api_key=6491e34e66e0d5744f3727caaf277987";

  $.ajax({
    url: search_base_url + `&with_genres=${happyValue}`,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < 5; i++) {
      var poster =
        "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path;
      var rawTitle = response.results[i].title;
      var newTitle = $("<p>")
        .text(rawTitle)
        .addClass("title-text");
      var releaseDate = response.results[i].release_date;
      var release = $("<p>")
        .text(releaseDate)
        .addClass("release-text");
      var overview = response.results[i].overview;
      var story = $("<p>")
        .text(overview)
        .addClass("overview-text");
      var newPoster = $("<img>")
        .attr("src", poster)
        .addClass("poster");
      var newDiv = $("<div>").addClass("movie-card");
      var movieThumb = newDiv.append(newPoster);
      var movieCard = $(movieThumb)
        .append("<br>")
        .append(rawTitle)
        .append(story)
        .append(release)
        //<hr> is optional depending on the font end layout
        .append("<hr>");;
      $("#movie-target").append(movieCard);
    }
  });
});

//====== sad ======//
$("#sad").click(function(e) {
  e.preventDefault();

  var sadIds = [80, 99, 18, 10402, 10749];
  var sadValue = getRandom(sadIds);
  console.log(sadValue);

  // keep this line only if you want to empty the results area with every search.
  $("#movie-target").html("");

  var search_base_url =
    "https://api.themoviedb.org/3/discover/movie?api_key=6491e34e66e0d5744f3727caaf277987";

  $.ajax({
    url: search_base_url + `&with_genres=${sadValue}`,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < 5; i++) {
      var poster =
        "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path;
      var rawTitle = response.results[i].title;
      var newTitle = $("<p>")
        .text(rawTitle)
        .addClass("title-text");
      var releaseDate = response.results[i].release_date;
      var release = $("<p>")
        .text(releaseDate)
        .addClass("release-text");
      var overview = response.results[i].overview;
      var story = $("<p>")
        .text(overview)
        .addClass("overview-text");
      var newPoster = $("<img>")
        .attr("src", poster)
        .addClass("poster");
      var newDiv = $("<div>").addClass("movie-card");
      var movieThumb = newDiv.append(newPoster);
      var movieCard = $(movieThumb)
        .append("<br>")
        .append(story)
        .append(rawTitle)
        .append(release)
        //<hr> is optional depending on the font end layout
        .append("<hr>");;
      $("#movie-target").append(movieCard);
    }
  });
});
//====== angry ======//
$("#angry").click(function (e) {
  e.preventDefault();

  var angryIds = [28, 16, 35, 14, 10749, 10770];
  var angryValue = getRandom(angryIds);
  console.log(angryValue);

  // keep this line only if you want to empty the results area with every search.
  $("#movie-target").html("");

  var search_base_url =
    "https://api.themoviedb.org/3/discover/movie?api_key=6491e34e66e0d5744f3727caaf277987";

  $.ajax({
    url: search_base_url + `&with_genres=${angryValue}`,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < 5; i++) {
      var poster =
        "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path;
      var rawTitle = response.results[i].title;
      console.log(rawTitle);
      var newTitle = $("<p>")
        .text(rawTitle)
        .addClass("title-text");
      var releaseDate = response.results[i].release_date;
      var release = $("<p>")
        .text(releaseDate)
        .addClass("release-text");
      var overview = response.results[i].overview;
      var story = $("<p>")
        .text(overview)
        .addClass("overview-text");
      var newPoster = $("<img>")
        .attr("src", poster)
        .addClass("poster");
      var newDiv = $("<div>").addClass("movie-card");
      var movieThumb = newDiv.append(newPoster);
      var movieCard = $(movieThumb)
        .append("<br>")
        .append(rawTitle)
        .append(story)
        .append(release)
        //<hr> is optional depending on the font end layout
        .append("<hr>");;
      $("#movie-target").append(movieCard);
    }
  });
});

//====== perplexed ======//
$("#perplexed").click(function (e) {
  e.preventDefault();

  var perplexedIds = [80, 99, 18, 14, 36, 9648, 878,53];
  var perplexedValue = getRandom(perplexedIds);
  console.log(perplexedValue);

  // keep this line only if you want to empty the results area with every search.
  $("#movie-target").html("");

  var search_base_url =
    "https://api.themoviedb.org/3/discover/movie?api_key=6491e34e66e0d5744f3727caaf277987";

  $.ajax({
    url: search_base_url + `&with_genres=${perplexedValue}`,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < 5; i++) {
      var poster =
        "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path;
      var rawTitle = response.results[i].title;
      var newTitle = $("<p>")
        .text(rawTitle)
        .addClass("title-text");
      var releaseDate = response.results[i].release_date;
      var release = $("<p>")
        .text(releaseDate)
        .addClass("release-text");
      var overview = response.results[i].overview;
      var story = $("<p>")
        .text(overview)
        .addClass("overview-text");
      var newPoster = $("<img>")
        .attr("src", poster)
        .addClass("poster");
      var newDiv = $("<div>").addClass("movie-card");
      var movieThumb = newDiv.append(newPoster);
      var movieCard = $(movieThumb)
        .append(rawTitle)
        .append("<br>")
        .append(story)
        .append(release)
        //<hr> is optional depending on the font end layout
        .append("<hr>");
      $("#movie-target").append(movieCard);
    }
  });
});
//====== blah ======//

$("#blah").click(function (e) {
  e.preventDefault();

  var blahIds = [80, 99, 18, 10402, 10749, 27, 9648, 10752, 37];
  var blahValue = getRandom(blahIds);
  console.log(blahValue);

  // keep this line only if you want to empty the results area with every search.
  $("#movie-target").html("");

  var search_base_url =
    "https://api.themoviedb.org/3/discover/movie?api_key=6491e34e66e0d5744f3727caaf277987";

  $.ajax({
    url: search_base_url + `&with_genres=${blahValue}`,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < 5; i++) {
      var poster =
        "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path;
      var rawTitle = response.results[i].title;
      var newTitle = $("<p>")
        .text(rawTitle)
        .addClass("title-text");
      var releaseDate = response.results[i].release_date;
      var release = $("<p>")
        .text(releaseDate)
        .addClass("release-text");
      var overview = response.results[i].overview;
      var story = $("<p>")
        .text(overview)
        .addClass("overview-text");
      var newPoster = $("<img>")
        .attr("src", poster)
        .addClass("poster");
      var newDiv = $("<div>").addClass("movie-card");
      var movieThumb = newDiv.append(newPoster);
      var movieCard = $(movieThumb)
      .append("<br>")  
        .append(newTitle)
        .append(story)
        .append(release)
        //<hr> is optional depending on the font end layout
        .append("<hr>");
      $("#movie-target").append(movieCard);
    }
  });
});
//====== sad ======//
