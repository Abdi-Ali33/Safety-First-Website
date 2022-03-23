$(document).ready(function(){
    $("#btn").click(function(event){
        var firstName = $("#firstname").val();
        var secondName = $("#secondname").val();
        var message = $("#message").val();
        var email = $("#email").val();
        

        if(firstName===""||secondName===""||message===""||email===""){
            alert("Please fill the entire form")
        }
        else{
            alert("Hello " +firstName+ ", we have received your message, we will get back soon. Thank you!")
        event.preventDefault();
        }

    });
})
