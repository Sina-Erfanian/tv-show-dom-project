let getEle = document.querySelector("#selectOption");
let main = document.querySelector("#main");
let innerMain = document.querySelector("#innerMain");

function addContent(name, image, summary, number, season) {
  let createWrapperDiv = document.createElement("div");
  createWrapperDiv.className = "card";
  main.append(createWrapperDiv);

  let createImg = document.createElement("img");
  createImg.src = image;
  createImg.className = "card-img-top";
  createWrapperDiv.append(createImg);
  let createName = document.createElement("h3");
  createName.className = "card-title";
  createName.innerHTML = name;
  createWrapperDiv.append(createName);
  let createDivEle = document.createElement("div");
  createDivEle.innerHTML = summary;
  createWrapperDiv.append(createDivEle);
  let SeasonAndNumber = document.createElement("p");
  SeasonAndNumber.innerHTML = `S0${season} - E0${number}`;
  createWrapperDiv.append(SeasonAndNumber);
  return createWrapperDiv;
}

async function getApi() {
  const fetchApi = await fetch(
    "https://api.tvmaze.com/shows/216/episodes"
  ).then((data) => data.json());
  return fetchApi;
}
getApi().then((data) => {
  for (let datas of data) {
    let name = datas.name;
    let image = datas.image.medium;
    let summary = datas.summary;
    let season = `S${datas.season} - E${datas.number}`;
    let number = `S${datas.season} - E${datas.number}`;
    addContent(name, image, summary, season, number);
  }
});

async function getApi() {
  const fetchApi = await fetch(
    "https://api.tvmaze.com/shows/216/episodes"
  ).then((data) => data.json());
  return fetchApi;
}
getApi().then((data) => {
  for (let datas of data) {
    let createOption = document.createElement("option");
    createOption.innerHTML = `S0${datas.season} - E${datas.number}`;
    createOption.value = datas.id;
    getEle.append(createOption);
  }
});
getEle.addEventListener("change", () => {
  main.innerHTML = "";
  async function getApi() {
    const fetchApi = await fetch(
      "https://api.tvmaze.com/shows/216/episodes"
    ).then((data) => data.json());
    return fetchApi;
  }
  getApi().then((data) => {
    for (let datas of data) {
      if (datas.id == getEle.value) {
        let name = datas.name;
        let image = datas.image.medium;
        let summary = datas.summary;
        let season = `S${datas.season} - E${datas.number}`;
        let number = ``;
        addContent(name, image, summary, season, number);
      }
    }
  });
});

let getSearch = document.getElementById("searchBox");
let search_term = "";

getSearch.addEventListener("input", (event) => {
  search_term = event.target.value.toLowerCase();
  showList();
});
const showList = () => {
  main.innerHTML = "";
};

async function filter() {
  const fetchApi = await fetch(
    "https://api.tvmaze.com/shows/216/episodes"
  ).then((data) => data.json());
  return fetchApi;
}
filter().then((data) => {
  data
    .filter((item) => {
      return (
        item.name.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `<i>Name:</i> ${e.name}`
      main.appendChild(li);
    });
});