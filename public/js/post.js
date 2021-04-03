
$(".article-form").on("submit", async function(e){
    e.preventDefault();
    const data = new FormData()
    data.append("title", $("#article-title").val().trim())
    data.append("country", $("#article-country").val().trim())
    data.append("image", $("#article-image").val().trim())
    data.append("text", $("#article-text").val().trim())
    data.append("fileImage", $("#article-file").prop("files")[0])
    const resp = await fetch('http://localhost:3001/articles', {
        method: "post",
        body: data
    })
    window.history.go()
})