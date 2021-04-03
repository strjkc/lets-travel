$("document").ready( async function() {

    fetch('http://localhost:3001/article')
        .then(resp => resp.json())
        .then(data => {
            const cards = data.map( article => {
                console.log('articles json', article)
                return $(`
                <div class="col-4">
                    <div class="card">
                        <img srcset=${article.localImage || article.image} class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${article.title}</h5>
                          <p class="card-text">${article.text}</p>
                          <a href="#" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
                `)       
        })
        const cardsRow = $(".cards-row")
        cards.forEach(card => {
            card.appendTo(cardsRow)
        })
    
    })
})
