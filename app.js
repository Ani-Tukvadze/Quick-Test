const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");
const getData = function() {
result.innerText = "Loading....";

fetch("https://fakerapi.it/api/v1/users?_quantity=1&_gender=male")
.then((res) => res.json())
.then((data) => {
    result.innerText = JSON.stringify(data, null, 2);
})
.catch((error) => console.log(error));
};

fetchDataBtn.addEventListener('click', getData);
