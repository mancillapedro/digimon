const
    smallCard =
        ({ img, name, level }) =>
            `<article class="card mb-3 mx-auto dgm__card">
                <img src="${img}" class="img-fluid rounded-start" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${level}</p>
                </div>
                <a href="./show.html?searchOption=name&value=${name}" class="stretched-link"></a>
            </article>`,
    bigCard =
        ({ img, name, level }) =>
            `<article class="card border-0">
                <div class="row flex-column align-items-center">
                    <div class="col-12">
                        <div class="card-body text-center">
                            <h2 class="card-title mb-0">${name}</h5>
                            <p class="ps-5 card-text">${level}</p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
                        <img src="${img}" class="card-img-bottom">
                    </div>
                </div>
            </article>`

export { smallCard, bigCard }