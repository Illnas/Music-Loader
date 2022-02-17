let songSearch = document.getElementById("songSearch");
let search = document.getElementById("search");
let loading = document.getElementsByTagName("circle")[0];
let article = document.getElementById("article");
let template = document.getElementById("template")

search.onclick = () => {
  let value = songSearch.value
  console.log(value)
  loading.style.display = "block";
  fetch(`https://itunes.apple.com/search?term=${value}&entity=song&limit=10`)
  .then(response => response.json())
  .then(data => 
    data.results.map(e => {
        templateCreator(e.artistName, e.trackName, e.collectionName, e.releaseDate)

        console.log(e)})
    );

  setTimeout(loadingSpec, 1000);
  setTimeout(loadingArticle, 1000);
  songSearch.value = ""
    
/*   const request = new XMLHttpRequest();
  const endpoint = `https://itunes.apple.com/search?${value}=${value}&entity=song`;

  request.open("GET", endpoint);

  request.onload = function (e) {
    let receivedData = JSON.parse(e.target.response);

    console.log(receivedData);
  };

  request.send();

  */


}








const loadingArticle = () => {
  article.style.display = "flex";
};

const loadingSpec = () => {
  loading.style.display = "none";
  article.style.display = "flex";
};



const templateCreator = (artist, track, album, year) => {
    var clone = template.content.cloneNode(true);
    clone.querySelector(".song").querySelector("h4").innerText = `${artist}`
    clone.querySelector(".song").querySelector("h2").innerText = `${track}`
    clone.querySelector(".song").querySelector("h6").innerText = `${album}`
    clone.querySelector(".song").querySelector("span").innerText = `${year.substring(0, year.indexOf("-"))}`
    clone.querySelector("#heart").style.display = "block"
    clone.querySelector("#full").style.display = "none"
    

    clone.querySelector("#heart").onclick = (e) => {
        e.target.style.display = "none"
        console.log()




    }

    console.log(clone.querySelector("#heart").querySelector("path"))
    article.prepend(clone)
}
