import API_DIGIMON from "./../../api/apiDigimon.js"
import formComponent from "./../../components/formComponent.js"

addEventListener("DOMContentLoaded", () => {
    const form = formComponent()

    API_DIGIMON.allDigimons()
        .then(data => {
            const
                levels = new Set(),
                names = data.map(({ name, level }) => levels.add(level) && name)
            form.fillOptions({ names, levels: [...levels] })
        })

    form.select.value = ""
    form.input.value = ""
    form.chooseControlSearch(form.radioSection.querySelector(`input:checked`).dataset.controlSearch)
    form.addEvents()
})
