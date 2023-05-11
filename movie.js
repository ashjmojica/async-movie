const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", () => searchMovie());
const movieCard = document.querySelector("movieCard");
const movieTitle = document.querySelector("movieTitle");
const movieYear = document.querySelector("movieYear");
const movieID = document.querySelector("movieID");
const movieMain = document.querySelector("#movieMain");
async function searchMovie() {
  const searchbox = document.querySelector("#searchbox").value;
  const movieResults = await fetch(
    `http://www.omdbapi.com/?apikey=d6a83547&s=${searchbox}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  );
  const json = await movieResults.json();
  console.log(json.Search)
  for (i = 0; i < json.Search.length; i++) {
    const movieCardDiv = document.createElement("div");
    const movieTitle = document.createElement("h2");
    const movieCardPic = document.createElement("img");
    const movieYear = document.createElement("h1")
    movieCardDiv.innerText = "movie";
    movieTitle.innerText = json.Search[i].Title;
    movieCardPic.src = json.Search[i].Poster;
    //movieYear.innerText = movie.Year;

    movieCardDiv.append(movieCardPic, movieTitle, movieYear);
    movieMain.append(movieCardDiv);
    
  }
}
