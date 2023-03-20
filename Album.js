//Album Class

class Album
{
	private:
		var name = "none";
		var artist = "none";
		var albumCoverArt;
		var songAmount = 0;
		var songs[];

	public:
	constructor(name, artist, albumConverArt, songAmount, songs)
	{
		this.name = name;
		this.artist = artist;
		this.albumCoverart = albumCoverart;
		this.songAmount = songAmount;
		this.songs = songs;
	}
	
	//getter Methods
	get_Name(){
		return this.name;
	}

	get_Artist(){
		return this.artist;
	}

	get_albumCoverArt(){
		// return jpeg
	}

	get_songsAmount(){
		return this.songAmount;
	}

	get_songName(index){
		// retrieve Artist & Album name, get that album and traverse songs until we get to index
	}
	set_Name(name){
		this._Name = name;
	}
	set_Artist(artist){
		this._Artist = artist;
	}
	set_albumCoverArt(albumCoverArt){
		this._albumCoverArt = albumCoverArt;
	}
	set_songAmount(songAmount){
		this._songAmount = songAmount;
	}
	set_songs(songs){
		this._Songs = songs;
	}
};
