$("#mail-contact-form").on("submit", function(e){
    e.preventDefault()
    const contact = {
        name: $("#mail-contact-name").val(),
        email: $("#mail-contact-mail").val(),
        message: $("#mail-contact-message").val()
    }
    fetch("http://localhost:3001/mail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    window.history.go()
})

$("#phone-contact-form").on("submit", function(e){
    e.preventDefault()
    alert("We'll call you back as soon as posible!")
    fetch("http://localhost:3001/phone", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({number: $("#phone-submit").val()})
    })
})