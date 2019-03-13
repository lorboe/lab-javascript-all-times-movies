/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {

  var newDuration = movies.map(movie => {
    var duration = Number(movie.duration[0]*60) + Number(movie.duration[3])
newMovie = {
    title: movie.title,
    year:movie.year,
    director: movie.director,
    duration:duration, 
    genre: movie.genre,
    rate:movie.rate
}
return newMovie
 })
return newDuration
}

//emina's solution

// function turnHoursToMinutes(array) {
//   var newArray = array.map(function(movie){
//     var minutes = 0;

//      if (movie.duration.length == 2) {
//       minutes += (Number((movie.duration[0])))*60;
//     }
//     else if (movie.duration.length == 5) {
//       minutes += Number(movie.duration[0] + movie.duration[1]);
//     }
//     else {
//       minutes += (Number((movie.duration[0])))*60;
//       minutes += Number(movie.duration[3] + movie.duration[4]);
//       }


//      newMovie = {
//       title: movie.title,
//       year: movie.year,
//       director: movie.director,
//       duration: minutes,
//       genre: movie.genre,
//       rate: movie.rate
//     };
//     return newMovie;
//   })
//   return newArray;
// }


// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  var rateSum = movies.reduce(function(sum, movie) {
    if (movie.rate === "") {
      movie.rate = 0;
    }
    return (sum += parseFloat(movie.rate));
  }, 0);

  return parseFloat((rateSum / movies.length).toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {

var dramaMovies = movies.filter(function(movie) {
  return movie.genre.includes("Drama")
}) 

if (dramaMovies == false) {
  return undefined
} else {
  var rateSum2 = dramaMovies.reduce(function(sum, movie) {
    if (movie.rate === "") {
      movie.rate = 0;
    }
    return (sum += parseFloat(movie.rate));
  }, 0);

  return parseFloat((rateSum2 / dramaMovies.length).toFixed(2));
}}

// Order by time duration, in growing order

//emina's solution
function orderByDuration(movies) {
  movies.sort(function(a, b) {
    if (a.duration != b.duration) {
      return a.duration - b.duration;
    }
    else {
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    }

   });
  return movies;
}


// How many movies did STEVEN SPIELBERG

// function howManyMovies(movies) {
// var stevensMovies = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
// if (stevensMovies == false) {
//   return undefined
// } else {
// return `Steven Spielberg directed ${stevensMovies.length} drama movies!`
// }}

function howManyMovies(movies) {
  var dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
  if (dramaMovies == false) {
    return undefined
  } 
  var stevensMovies = dramaMovies.filter(movie => movie.director === "Steven Spielberg")
  return `Steven Spielberg directed ${stevensMovies.length} drama movies!`
  }
  

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
var orderedMovies = movies.map(movie => movie.title).sort()
return orderedMovies.slice(0, 20)
}

// Best yearly rate average
