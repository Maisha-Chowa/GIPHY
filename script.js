//console.log("connected");

// Load all Giphy api

const APIKEY = "ICGG17R0gVcReqOL9Yp68tbFo30JGRw9";

const loadAllGiphy = () => {
  const inputText = document.getElementById("input-field");
  const searchGiphy = inputText.value;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=${searchGiphy}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllGiphy(data.data));

  inputText.value = "";
};
//
// loadApi(); displayAllGiphys(data.data)
//console.log(data.data[0].images.downsized.url)
// Display all Giphys Section
const displayAllGiphy = (Giphs) => {
  console.log(Giphs);
  const showGiphs = document.getElementById("show-giphy");

  showGiphs.textContent = " ";

  Giphs.forEach((Giphy) => {
    const createDiv = document.createElement("div");
    createDiv.classList.add = "col";
    createDiv.innerHTML = `
        <div class="card">
            <img src="${Giphy?.images.downsized.url}" class="card-img-top p-4" alt="..." >
            <h5 class="card-title text-center">${Giphy?.title}</h5>
          </div>
        `;
    showGiphs.appendChild(createDiv);
  });
};
