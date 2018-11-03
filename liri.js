require("dotenv").config();

var keys = require("./keys.js");
var request = require('request');
var Spotify = require('node-spotify-api');
var fs = require("fs");

function doWhat (command,dataItem) {
    if (command === "movie-this") {
        movieInfo(dataItem);
    } else if (command === "spotify-this-song") {
        spotifySong(dataItem);
    } else if (command === "do-what-it-says") {
        doWhatItSays();
    }
};


//Set command variable
let command = process.argv[2];
let dataItem = process.argv.slice(3).join("+");
doWhat(command,dataItem);


/////////////////////////////////////////////////////
// node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

// Name of the venue

// Venue location

// Date of the Event (use moment to format this as "MM/DD/YYYY")
//////////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// node liri.js spotify-this-song '<song name here>'

function spotifySong (trackName) {
    var spotify = new Spotify(keys.spotify);
    //let trackName = process.argv.slice(3).join("+");

    if (!trackName) {
        trackName = "The Sign";
    }

    spotify.search({ type: "track", query: trackName}, function(error, data) {
    if (error) {
      return console.log('Error occurred: ' + error);
    }
   
    console.log("Artist: "+data.tracks.items[0].artists[0].name);
    console.log("Song Title: "+data.tracks.items[0].name);
    if (data.tracks.items[0].preview_url === null) {
        console.log("Preview URL: No preview available")
    } else {
        console.log("Preview URL: "+data.tracks.items[0].preview_url); 
    }
    console.log("Album: "+data.tracks.items[0].album.name); 
    });

}
////////////////////////////////////////////////

/////////////////////////////////////////////////
// node liri.js movie-this '<movie name here>'

function movieInfo (movieName) {
    //let movieName = process.argv.slice(3).join("+");

    if (!movieName) {
        movieName = "Mr. Nobody";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=1ce97356";

    // Then run a request to the OMDB API with the movie specified
    request(queryUrl, function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body));
        console.log("Movie Title: "+JSON.parse(body).Title);
        console.log("Year: "+JSON.parse(body).Year);
        console.log("IMDB Rating: "+JSON.parse(body).Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: "+JSON.parse(body).Ratings[1].Value);
        console.log("Country: "+JSON.parse(body).Country);
        console.log("Language: "+JSON.parse(body).Language);
        console.log("Plot: "+JSON.parse(body).Plot);
        console.log("Actors: "+JSON.parse(body).Actors);
    }
    });
}
////////////////////////////////////////////////

////////////////////////////////////////////////
// node liri.js do-what-it-says

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
function doWhatItSays () {
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
        return console.log(error);
        }
        
        // Then split it by commas (to make it more readable)
        const fileCommand = data.split(",")[0];
        const fileInfo = data.split(",")[1]

        doWhat(fileCommand,fileInfo);

    
        
    });
}
  

// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

// Edit the text in random.txt to test out the feature for movie-this and concert-this.
//////////////////////////////////////////////////



