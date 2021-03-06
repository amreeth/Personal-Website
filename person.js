$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            number:{
                required:true,
                minlength:10,
                maxlength:10,
                matches:"[0-9]"
            },
            message:{
                required:true,
                minlength:5,
                maxlength:400
            }
        }
    })
})
