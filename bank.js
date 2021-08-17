//log in js
document.getElementById('submitbutton').addEventListener('click', function(){
   const emailfield = document.getElementById('useremail');
   const useremails = emailfield.value;
    // get password
    const passwordfield = document.getElementById('userpass');
    const userpassword = passwordfield.value;

    // validation

    if(useremails == 'ahan@gmail.com' && userpassword == 12345)
    {
        window.location.href = 'banksecon.html'
    }
    else{
        alert('please register first')
    }
});
