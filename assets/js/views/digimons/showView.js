import API_DIGIMON from "./../../api/apiDigimon.js"
import { bigCard, smallCard } from "./../../components/cardComponent.js"

const
    notFoundTemplate = ({ searchOption, value }) =>
        `<h2 class="text-center mb-3 mb-md-4 mb-xl-5">
            ${searchOption == "name" ? "El Digimon" : ""} "${value}" no ha sido encontrado :(
        </h2>`

const
    search = new URLSearchParams(window.location.search),
    params = {
        searchOption: search.get("searchOption"),
        value: search.get("value")
    }

addEventListener("DOMContentLoaded", () => {

    API_DIGIMON(params)
        .then((data) =>
            document.querySelector("main").insertAdjacentHTML('beforeend',
                !data[0] ?
                    notFoundTemplate(params)
                    :
                    params.searchOption === "name" ?
                        `<div class="vh-100">
                        ${bigCard(data[0])}
                        </div>`
                        :
                        `<h2 class="text-center mb-3 mb-md-4 mb-xl-5">Level: ${params.value}</h2>
                        <section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
                        ${data.map(item => `<div class="col">${smallCard(item)}</div>`).join("")}
                        </section>
                        `

            )
        )
})