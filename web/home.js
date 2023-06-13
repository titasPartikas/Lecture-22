/* eslint-disable */
const h1 = document.querySelector("h1");
console.log(localStorage.getItem("token"));
fetch("http://localhost:8080/", {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    if (data.error) {
      h1.textContent = data.error;
      return;
    }

    h1.textContent = data.message;
  })
  .catch((error) => console.error(error));
