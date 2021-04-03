$("document").ready(function(){
    const baseUrl = "http://localhost:3001/"
    $(".table").on("click", async function(e){
        console.log("clicked", e.target)
        if (e.target.classList.contains("delete-button")){
            let classes = e.target.parentElement.classList.value
            let type = classes.substring(classes.indexOf("-")+1, classes.indexOf(" "))
            let id = type === "article" 
                ? e.target.parentElement.previousElementSibling.previousElementSibling.textContent
                : e.target.parentElement.previousElementSibling.textContent
            fetch(`${baseUrl}${type}/${id}`, {
                method: "DELETE"
            })
                .then(() => window.history.go())
        }            
    })  
})
  