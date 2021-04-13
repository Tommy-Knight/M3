async function loadSongs(artist) {
    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, {
			method: "GET",
			headers: {
				"x-rapidapi-key": "93c27b20f1msh447fc923a1275afp112802jsn56ee71713f05",
				"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			},
		})
            let songsResponse = await response.json()
            return songsResponse.data
}
