const API_KEY = "5cf6a1e410784fee2bab09973e002a25";

async function getData() {
    try {

        let apiUrl = "https://api.themoviedb.org/3/movie/550?api_key=" + API_KEY;
        let res = await fetch(apiUrl);
        res = await res.json();
        console.log(res);
    } catch (err) { console.log(err) }
}