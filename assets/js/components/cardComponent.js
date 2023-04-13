const
    smallCard =
        ({ img, name, level }) =>
            `<article class="card mb-3 mx-auto">
                <img src="${img}" class="img-fluid rounded-start" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${level}</p>
                </div>
                <a href="./show.html?name=${name}" class="stretched-link"></a>
            </article>`,
    bigCard =
        ({ img, name, level }) =>
            `<article class="card text-bg-dark">
                <img src="${img}" class="card-img">
                <div class="card-img-overlay">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${level}</p>
                </div>
            </article>`

export { smallCard, bigCard }