const formElements = () => {
    const form = document.querySelector(`#searchForm`)
    return {
        input: form.querySelector(`input[name]`),
        buttonSubmit: form.querySelector(`[type="submit"]`)
    }
}

addEventListener("DOMContentLoaded", () => {
    const form = formElements()
    form.buttonSubmit.disabled = !Boolean(form.input.value)
    form.input.addEventListener("input", (e) => form.buttonSubmit.disabled = !Boolean(e.target.value))
})