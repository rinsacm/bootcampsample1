$(document).ready( function(){
    $("#signup-form").validate({
        rules:{
            firstname:{
                required:true,
                minlength:4
            },
            lastname:{
                required:true,
                minlength:4
            },
            username:{
                required:true,
                minlength:4
            },
            password:{
                required:true,
                minlength:5
            },

            cpassword:{
                required:true,
                minlength:5,
                equalTo:"#password"

            }
        },
        messages:{
            firstname:{
                required:'Please enter your first name',
                minlength:'Minimum length 4'
            },
            lastname:{
                required:'Please enter your last name',
                minlength:'Minimum length 4'
            },
            username:{
                required:'Please enter your username',
                minlength:'Minimum length 4'
            },
            password:{
                required:'Please enter your password',
                minlength:'Minimum length 5'
            },
            cpassword:{
                required:'Retype your password',
                minlength:'Minimum length 5',
                equalTo:"Password doesn't match"

            }
        }
    })
})