let getEle = document.querySelector("#selectOption");
let main = document.querySelector("#main");
let innerMain = document.querySelector("#innerMain");

function addContent(name, image, summary, number, season) {
  let createWrapperDiv = document.createElement("div");
  createWrapperDiv.className = "card";
  main.append(createWrapperDiv);

  let createImg = document.createElement("img");
  createImg.src = image;
  createWrapperDiv.append(createImg);
  let createName = document.createElement("h3");
  createName.className = "title-card";
  createName.innerHTML = name;
  createWrapperDiv.append(createName);
  let createDivEle = document.createElement("div");
  createDivEle.className = "sumarry-card";
  createDivEle.innerHTML = summary;
  createWrapperDiv.append(createDivEle);
  let SeasonAndNumber = document.createElement("p");
  SeasonAndNumber.innerHTML = `Season ${season} - Episode ${number}`;
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
    let season = datas.season;
    let number = datas.number;
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
let getTitle = document.querySelector(".title-all");
getEle.addEventListener("change", () => {
  getTitle.innerHTML = "";
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
        let season = datas.season;
        let number = datas.number;
        addContent(name, image, summary, season, number);
      }
    }
  });
});

let getSearch = document.getElementById("searchBox");

getSearch.addEventListener("keyup", (ev) => {
  getTitle.innerHTML = "";
  main.innerHTML = "";
  let getValue = ev.target.value;
  async function getApi() {
    const fetchApi = await fetch(
      "https://api.tvmaze.com/shows/216/episodes"
    ).then((data) => data.json());
    return fetchApi;
  }
  getApi().then((data) => {
    let getData = data.filter((ele) => {
      let lowercase = ele.name.toLowerCase();
      return lowercase.includes(getValue);
    });
    let counter = 0;
    getData.forEach((element) => {
      counter++;
      let name = element.name;
      let image = element.image.medium;
      let summary = element.summary;
      let season = element.season;
      let number = element.number;
      addContent(name, image, summary, season, number);
    });
    getTitle.innerHTML = `<span class="all-episode">${counter} Episode found</span>`;
  });
});
