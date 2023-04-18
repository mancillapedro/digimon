import API_DIGIMON from "./../../api/apiDigimon.js"
import { smallCard } from "./../../components/cardComponent.js"
import loadingComponent from "../../components/loadingComponent.js"

addEventListener("DOMContentLoaded", () => {
    const
        digimonSection = document.querySelector("#digimonSection"),
        loading = loadingComponent()
    API_DIGIMON({})
        .then(data =>
            data.forEach(item =>
                digimonSection.insertAdjacentHTML('beforeend', `<div class="col">${smallCard(item)}</div>`)
            )
        )
        .then(loading.hide)
})