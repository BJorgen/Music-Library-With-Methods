var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var  playlist in library.playlists) {
    console.log(playlistSummary(playlist));
  }
}


var playlistSummary = function (playlist) {
    let currentPlaylist = library.playlists[playlist];
    return `${playlist}: ${currentPlaylist.name} - ${currentPlaylist.tracks.length} tracks`;
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var track in library.tracks) {
    console.log(trackSummary(track))
  }
}


var trackSummary = function (track) {
  let currentTrack = library.tracks[track];
  return `${track}: ${currentTrack.name} by ${currentTrack.artist} (${currentTrack.album})`;
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  console.log(playlistSummary(playlistId))

  let playlistTracks = library.playlists[playlistId].tracks;
  for (var i = 0; i <  playlistTracks.length; i++) {
    let track = playlistTracks[i];
    console.log(trackSummary(track));
  }
}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  let currentTrackList = library.playlists[playlistId].tracks;
  if(!currentTrackList.includes(trackId)) { currentTrackList.push(trackId)}
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  let trackId = uid();
  library.tracks[trackId] = {id: trackId, name: name, artist: artist, album: album}
}


// adds a playlist to the library

var addPlaylist = function (name) {
  let playlistId = uid();
  library.playlists[playlistId] = {id: playlistId, name: name, tracks: []}
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}


// ----- Testing Code -----
console.log("\n--- printPlaylists --- \n");
printPlaylists();

console.log("\n--- printTracks --- \n");
printTracks();

console.log("\n--- printPlaylist('p01') --- \n");
printPlaylist('p01');
console.log("\n--- printPlaylist('p02') --- \n");
printPlaylist('p02');

// Adding track t02 to playlist p02 and checking if changes were made
console.log("\n--- addTrackToPlaylist('t02','p02') --- \n");
addTrackToPlaylist('t02','p02');
printPlaylist('p02');

// Add a new track and check to see if it has been added to the list of tracks
console.log(`\n--- addTrack("Don't Worry Be Happy", "Bobby McFerrin", "Simple Pleasures") --- \n`);
addTrack("Don't Worry Be Happy", "Bobby McFerrin", "Simple Pleasures");
printTracks();

console.log(`\n--- addPlaylist ("gym") --- \n`);
addPlaylist ("Gym Music");
printPlaylists();


//printSearchResults(query)


