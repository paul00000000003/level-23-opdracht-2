async function verkrijgData() {
    let genres = await getData();
    let namen = genres[0];
    let ids = genres[1];
    //console.log(genres[0]);
    return genres;
}

async function postMoviesGenres(namen, ids) {
    namen.forEach((element, index) => {
        console.log(element + " " + ids[index]);
        regel = document.createElement("li");
        regel.innerHTML = "genre naam : " + element + " ,id " + ids[index];
        genresLijst.appendChild(regel);
    })

}

async function postGetTopRatedMovies() {
    console.log("binnen postGetTopRatedMovies");
}

async function postGetTopRatedActionMovies() {
    console.log("binnen postGetTopRatedActionMovies");
}

let genresLijst = document.getElementById("genres");
let regel = "";
let arr3 = [];
let text = verkrijgData().then(result => {
    let genres = result;
    let namen = genres[0];
    let ids = genres[1];
    //let ids = genres[1];
    postMoviesGenres(namen, ids);
    postGetTopRatedMovies();
    postGetTopRatedActionMovies();
    arr3 = result;
});

setTimeout(() => console.log(arr3.length), 200);