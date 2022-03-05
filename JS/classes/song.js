export default class Song {
    constructor(song) {
        this.song = new Audio (song)
    }
/* play the song if songsMuted is false */
    playSong(songsMuted) {
        !songsMuted ? this.song.play() : false
    }
}