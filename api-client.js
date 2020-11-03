const API_KEY = "602151ee0515babb6cbb286da27be73b";

async function getData() {
    try {
        //let apiUrl = "   ?api_key=" + API_KEY;
        //let text = await fetch("https://jsonplaceholder.typicode.com/users");
        let text = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY);
        let result = await text.json();
        const namen = result["genres"].map(element => element.name);
        const ids = result["genres"].map(element => element.id);
        return [namen, ids];
    } catch (err) { console.log(err) }
}