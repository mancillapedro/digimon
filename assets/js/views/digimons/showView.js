import API_DIGIMON from "./../../api/apiDigimon.js"
import { bigCard } from "./../../components/cardComponent.js"

const notFoundTemplate = name =>
    `<h2 class="text-center">
        El Digimon ${name} no ha sido encontrado :(
    </h2>`

const digimonName = new URLSearchParams(window.location.search).get("name")

addEventListener("DOMContentLoaded", () => {
    API_DIGIMON.oneDigimon(digimonName)
        .then(([data, _]) =>
            document.querySelector("main").insertAdjacentHTML('beforeend',
                data ? bigCard(data) : notFoundTemplate(digimonName)
            )
        )
})