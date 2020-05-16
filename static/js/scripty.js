
$(document).ready(function(){
    console.log("loaded");
    $.material.init();

    $(document).on("sumbit","#register-form", function(e){
        e.preventDefault();
        console.log("form submitted");
        var form = $('#register-form').serialize();
        $.ajax({
            url: 'postregistration',
            type: 'POST',
            data: form,
            success: function(reponse){
                console.log(reponse);
            }
        })
    });
});

