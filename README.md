# LIRI Bot

LIRI command line node app that takes in parameters and gives you back data

## Finding Concert Information for an Artist

Use the command '*concert-this*' followed by an artist or band name to find the upcoming concert information about that artist or band.
The output will give you the following information about each event in the terminal:

* Venue Name
* Venue location
* Date of the Event

**Command**:

![concert-this command](./images/concert-this-1.png)

**Output**:

![concert-this output](./images/concert-this-2.png)


## Get Song Information from Spotify

Use the command '*spotify-this-song*' followed by a song title to show the following information about the song in your terminal.

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

*If no song is provided then your program will default to "The Sign" by Ace of Base.*

**Command**:

![spotify-this command](./images/spotify-this-1.png)

**Output**:

![spotify-this output](./images/spotify-this-2.png)


## Get Movie Information

Use the command '*movie-this*' followed by a movie title to show the following information about the movie in your terminal.

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

*If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'*

**Command**:

![movie-this command](./images/movie-this-1.png)

**Output**:

![movie-this output](./images/movie-this-2.png)


## Run a LIRI Command from a File

To run a command from a file, use the command '*do-what-it-says*'. LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. The user can edit the text inside random.text to change what command runs.

The random.text file is initially written to run the spotify-this-song command for "I Want it That Way."

**Command**:

![do-this command](./images/do-this-1.png)

**Output**:

![do-this output](./images/do-this-2.png)


## Log File

Each time you run one of the commands above, the command and the search term is appended into the log.txt file.