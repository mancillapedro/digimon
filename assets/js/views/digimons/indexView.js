import API_DIGIMON from "./../../api/apiDigimon.js"
import { smallCard } from "./../../components/cardComponent.js"

addEventListener("DOMContentLoaded", () => {
    const digimonSection = document.querySelector("#digimonSection")
    API_DIGIMON.allDigimon().then(data =>
        data.forEach(item =>
            digimonSection.insertAdjacentHTML('beforeend', `<div class="col">${smallCard(item)}</div>`)
        )
    )
})