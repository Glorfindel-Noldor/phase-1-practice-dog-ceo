console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  const dogImgContr = document.getElementById("dog-image-container");
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((pic) => {
        const imageElement = document.createElement("img");
        imageElement.src = pic;
        dogImgContr.appendChild(imageElement);
      });
    })
    .catch((error) => {
      console.error("no doggy pics", error);
    });
  //----------------------------------------------------------------------
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  let dogArray = [];
  let dataZ = [];
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      dogArray = Object.keys(data.message);
      dataZ = data;
      console.log(dogArray);

      dogArray.forEach((i) => {
        const li = document.createElement("li");
        li.innerText = i;
        parentElement = document.querySelector("ul");
        let packed = parentElement.appendChild(li);
      });
    });
  const breedDropdown = document.querySelector("#breed-dropdown");
  breedDropdown.addEventListener("change", () => {
    packed = breedDropdown.value;
    console.log(packed, "letter selected");
    dogArray = Object.keys(dataZ.message).filter((dog) =>
      dog.startsWith(packed)
    );
    parentElement = document.querySelector("ul");
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
    dogArray.forEach((i) => {
      const li = document.createElement("li");
      li.innerText = i;
      let packed = parentElement.appendChild(li);
    });
  });
});
