export default () => {
    const
        optionsToHtml = (element, options) => element.insertAdjacentHTML('beforeend', options.map(option => `<option value="${option}">${option}</option>`).join(''))

    const
        form = document.querySelector(`#searchForm`),
        buttonSubmit = form.querySelector(`[type="submit"]`),
        dataList = form.querySelector(`#digimonDataList`),
        select = form.querySelector(`select[name="level"]`)

    return {
        select,
        radioSection: form.querySelector(`#radioSection`),
        input: form.querySelector(`input[name="name"]`),

        disableSubmit: ({ value }) => buttonSubmit.disabled = !Boolean(value),

        fillOptions: ({ names, levels }) => optionsToHtml(dataList, names) || optionsToHtml(select, levels),

        chooseControlSearch: function (selected) {
            this[selected !== "input" ? "input" : "select"].classList.add("d-none") // unselected
            this[selected].classList.remove("d-none") // selected
            this.disableSubmit(this[selected])
        },
        
        addEvents: function () {
            this.radioSection.addEventListener("click", ({ target }) => target.tagName === "INPUT" && this.chooseControlSearch(target.dataset.controlSearch))
            this.input.addEventListener("input", ({ target }) => this.disableSubmit(target))
            this.select.addEventListener("change", ({ target }) => this.disableSubmit(target))
            form.addEventListener("submit", (e) => {
                e.preventDefault()
                const data = [...new FormData(form).entries()].reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
                window.location.href = `./digimons/show.html?${data.searchOption}=${data[data.searchOption]}`
            })
        }
    }
}