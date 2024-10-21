const nadpis = document.querySelector("h1")
// const nadpis2 = document.querySelectorAll("h1")

nadpis.textContent = "Toto jsem zmenil za pomoci JS"

nadpis.style.color = "black"
nadpis.style.backgroundColor = "green"

nadpis.classList.add("ramecek")
nadpis.classList.remove("ramecek")

document.querySelector("#obrazek-kocka").src = "https://assets.marthastewart.com/styles/wmax-1500/d20/cat-kitten-138468381/cat-kitten-138468381_horiz.jpg"
document.querySelector("#obrazek-kocka").style.width = "200px"
document.querySelector("#obrazek-kocka").alt = "Krasna kocka"