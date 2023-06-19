console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const imgContainer = document.querySelector("#dog-image-container");
  const dogBreedsList = document.querySelector("#dog-breeds");

  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) =>
      data.message.forEach((dog) => {
        const img = document.createElement("img");
        img.src = dog;
        imgContainer.append(img);
      })
    );

  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      for (const breed in data.message) {
        const li = document.createElement("li");
        li.textContent = breed;
        dogBreedsList.append(li);
        li.addEventListener("click", () => {
          li.style.color = "red";
        });
      }
    });

  const dropdownBtn = document.querySelector("#breed-dropdown");
  dropdownBtn.addEventListener("change", () => {
    const liList = document.querySelectorAll("li");
    liList.forEach((li) => li.remove());

    fetch(breedUrl)
      .then((res) => res.json())
      .then((data) => {
        for (const breed in data.message) {
          if (breed[0] === dropdownBtn.value) {
            const li = document.createElement("li");
            li.textContent = breed;
            dogBreedsList.append(li);
            li.addEventListener("click", () => {
              li.style.color = "red";
            });
          }
        }
      });
  });
});
