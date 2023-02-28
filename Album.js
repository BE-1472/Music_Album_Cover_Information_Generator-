//Album Class

class Album
{
	constructor(name, artist, albumConvert, songAmount, songs)
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

	get_coverArt(){
		// return jpeg
	}

	get_songsAmount(){
		return this.songAmount;
	}

	get_songName(index){
		// retrieve Artist & Album name, get that album and traverse songs until we get to index
	}
};
