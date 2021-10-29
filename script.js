$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true
            },
            lname:{
                required:true
            },
            mail:{
                required:true,
                email:true,
            },
            pswd:{
                required:true,
                minlength:8,
                maxlength:40   
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            mail:{
                required:"Enter a valid email or phone-number"

            }
        }
    })
})