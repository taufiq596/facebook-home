$(document).ready(function(){
    $('input').keyup(function(){
        var value = $(this).val();
        var obj= $(this).attr('placeholder')
        if(obj=='First name'){  
            if(value.length<6 || value.length>20){
                $('#firstName').html('Please enter first name between 6 to 20 characters')
            }
            else{
                $('#firstName').html('')
            } 
        }
        if(obj=='Surname'){
            if(value.length<6 || value.length>10){
                $('#surName').html('Surname must be 6 to 10 digit')
            }
            else{
                $('#surName').html('')
            }
        }
        if(obj=='Mobile number or email address'){
            var atPosition = value.indexOf('@');
            var dotPosition = value.lastIndexOf('.');
            if(atPosition<4){
                $('#mEmail').html('Please Enter valid email and number')
            }
            else if(dotPosition-atPosition<4){
                $('#mEmail').html('Please Enter valid email address')
            }
            // // else if(isNaN(value)){
            // //     $('#mEmail').html('Please enter mobile number')
            // }
            else if(value.length != 10){
                $('#mEmail').html('Please enter 10 digit mobile number')
            }
            else{
                $('#mEmail').html('');
            }
        }
        if(obj=='New password'){
            if(value.length<6 || value.length>15){
                $('#nwPass').html('Password should be between 6 to 15 characters')
            }
            else{
                $('#nwPass').html('')
            }
        }
    });
});