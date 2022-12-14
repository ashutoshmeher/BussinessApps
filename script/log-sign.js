//signup coading start
//window.alert("hii");
function sign_up()
{
    var uname=btoa(document.getElementById("username").value);
    //this data can be easily seen in the local storage so we have to decode it
    console.log(uname);
    var upass=btoa(document.getElementById("password").value);
    var uemail=btoa(document.getElementById("email").value);
    var umobile=btoa(document.getElementById("number").value);

    
   
    // console.log(user_data);
    if(uname!="" && upass!="" && uemail!="" && umobile!="")
    {
        console.log("ho");
        var user_input={name:uname,email:uemail,password:upass,mobile:umobile};
        //first one is the propertty and second one is th varible;
        var user_data=JSON.stringify(user_input);
        localStorage.setItem(uemail,user_data);
        document.getElementById("success").innerHTML="sign up success";
        document.getElementById("name").value="";
        document.getElementById("password").value="";
        document.getElementById("email").value="";
        document.getElementById("number").value="";
        setTimeout(function(){document.getElementById("success").innerHTML=""},4000);
        return false;
    }
   
}
function chk_emil()
{
    
    var email=btoa(document.getElementById("email").value);
    if(localStorage.getItem(email)!=null)
    {
        document.getElementById("user-found").innerHTML="user existed"
        document.getElementById("sub").disabled=true;
        document.getElementById("number").disabled=true;
        document.getElementById("password").disabled=true;
        document.getElementById("email").style.backgroundColor="black";
        document.getElementById("email").style.color="white";
        document.getElementById("email").classList.add("pulse");
        document.getElementById("email").classList.add("infinite");
        document.getElementById("email").onclick=function()
        {
            this.value="";
            document.getElementById("user-found").innerHTML="";
            document.getElementById("email").style.background="white";
            document.getElementById("email").style.color="black";
            document.getElementById("email").classList.remove("infinite");
            document.getElementById("sub").disabled=false;
        document.getElementById("number").disabled=false;
        document.getElementById("password").disabled=false;

        }

    }

}
function log_in()
{
    var password=btoa(document.getElementById("login-pass").value);
    var username=btoa(document.getElementById("login-user").value);
   var user_input={username:username,password:password};
    var user_data=JSON.stringify(user_input);
    sessionStorage.setItem(username,user_data);
    var sess_data=sessionStorage.getItem(username);
    var sess_input=JSON.parse(sess_data);
    console.log(sess_input.username);
if(localStorage.getItem(sess_input.username)==null)
{  var x=localStorage.getItem(sess_input.username);
    var y=JSON.parse(x);
    alert(y);
   alert("user not found")
}
else{
    var x=localStorage.getItem(sess_input.username);
    var y=JSON.parse(x);
    if(y.password==sess_input.password)
    {   // alert("you are login ")
        location.replace("profile/profile.html");
        sessionStorage.setItem('user_email',username);
        //this is anotherdata we have store in the sesstopn for retriving the name
        return false;
        //we could have use oher but this is the coorect one sinse it will replace that url and it cant go back since it is already log in 
        //we cant also opoen in ither tab because it will delete sessionstorage.
    }
    else{
        alert("password is wrong");
    }

}
}