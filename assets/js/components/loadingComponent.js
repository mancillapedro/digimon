export default () => {
    const loading = document.querySelector('#loading')
    return {
        hide: () => loading.classList.add('d-none')
    }
}
