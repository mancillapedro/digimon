import API_DIGIMON from "./../../api/apiDigimon.js"
import formComponent from "./../../components/formComponent.js"
import loadingComponent from "../../components/loadingComponent.js"

addEventListener("DOMContentLoaded", () => {
    const
        form = formComponent(),
        loading = loadingComponent()

    API_DIGIMON({})
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
    loading.hide()
})
