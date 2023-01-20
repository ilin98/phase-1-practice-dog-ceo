console.log('%c HI', 'color: firebrick')

const renderResponse = function (url) {
    const img = document.createElement("img")
    img.src = `${url}`
    document.querySelector("#dog-image-container").appendChild(img)
}

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const initializeRandom = () => {
fetch(imgUrl)
.then(response => response.json())
.then(data => {
    data.message.forEach(url => renderResponse(url))
})
}

initializeRandom()

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const filterOptions = document.querySelector("option")


const renderBreeds = function (breed) {
    const dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener("change", () => {
    if (breed[0][0] === "a") {
        const ali = document.createElement("li")
        if (filterOptions.innerText === "a") {
            ali.innerText = breed[0]
            ali.className = "breed-name"
            document.querySelector("#dog-breeds").appendChild(ali)
        }
    } else if (breed[0][0] === "b") {
        const bli = document.createElement("li")
        if (filterOptions.innerText === "b") {
            bli.innerText = breed[0]
            bli.className = "breed-name"
            document.querySelector("#dog-breeds").appendChild(bli)
        }
    } else if (breed[0][0] === "c") {
        const cli = document.createElement("li")
        if (filterOptions.innerText === "c") {
            cli.innerText = breed[0]
            cli.className = "breed-name"
            document.querySelector("#dog-breeds").appendChild(cli)
        }
    } else if (breed[0][0] === "d") {
        const dli = document.createElement("li")
        if (filterOptions.innerText === "d") {
            dli.innerText = breed[0]
            dli.className = "breed-name"
            document.querySelector("#dog-breeds").appendChild(dli)
        }
    }})
    li.addEventListener("click", () => {
        li.style.color = "blue"
    })
}

const initializeBreed = () => {
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data.message)
        const arrayBreeds = Object.entries(data.message)
        arrayBreeds.forEach(breed => renderBreeds(breed))
        // data.message.forEach(breed => renderBreeds(breed))
    })
}

initializeBreed()
