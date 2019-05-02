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
             },

  printPlaylists: function () {
    for (var  playlist in this.playlists) {
      console.log(this.playlistSummary(playlist));
    }
  },

  playlistSummary: function (playlist) {
    let currentPlaylist = this.playlists[playlist];
    return `${playlist}: ${currentPlaylist.name} - ${currentPlaylist.tracks.length} tracks`;
  },

  printTracks: function () {
    for (var track in this.tracks) {
      console.log(this.trackSummary(track))
    }
  },

  trackSummary: function (track) {
    let currentTrack = this.tracks[track];
    return `${track}: ${currentTrack.name} by ${currentTrack.artist} (${currentTrack.album})`;
  },

  printPlaylist: function (playlistId) {
    console.log(this.playlistSummary(playlistId))
    let playlistTracks = this.playlists[playlistId].tracks;
    for (var i = 0; i <  playlistTracks.length; i++) {
      let track = playlistTracks[i];
      console.log(this.trackSummary(track));
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    let currentTrackList = this.playlists[playlistId].tracks;
    if(!currentTrackList.includes(trackId)) { currentTrackList.push(trackId)}
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    let trackId = this.uid();
    this.tracks[trackId] = {id: trackId, name: name, artist: artist, album: album}
  },

  addPlaylist: function (name) {
    let playlistId = this.uid();
    this.playlists[playlistId] = {id: playlistId, name: name, tracks: []}
  }

}


// ----- Testing Code -----
console.log("\n--- library.printPlaylists --- \n");
library.printPlaylists();

console.log("\n--- library.printTracks --- \n");
library.printTracks();

console.log("\n--- library.printPlaylist('p01') --- \n");
library.printPlaylist('p01');
console.log("\n--- library.printPlaylist('p02') --- \n");
library.printPlaylist('p02');

// Adding track t02 to playlist p02 and checking if changes were made
console.log("\n--- library.addTrackToPlaylist('t02','p02') --- \n");
library.addTrackToPlaylist('t02','p02');
library.printPlaylist('p02');

// Add a new track and check to see if it has been added to the list of tracks
console.log(`\n--- library.addTrack("Don't Worry Be Happy", "Bobby McFerrin", "Simple Pleasures") --- \n`);
library.addTrack("Don't Worry Be Happy", "Bobby McFerrin", "Simple Pleasures");
library.printTracks();

console.log(`\n--- library.addPlaylist ("gym") --- \n`);
library.addPlaylist ("Gym Music");
library.printPlaylists();



