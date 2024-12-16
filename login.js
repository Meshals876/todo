function login(callback)
{
    var usr=document.getElementById('username');
    var pwd=document.getElementById('password');   
    callback(usr,pwd);
}

function validate(user,pass)
{
    if (user.value=="admin" && pass.value==12345)
    {
        
        window.location.replace("main-page.html");
    }
    else
    {
        alert("invalid login credentials");
    }
}