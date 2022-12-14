secure_url();
function secure_url()
{
    if(sessionStorage.length<=0)
{
    document.getElementById("mainpage").style.display="none";
    document.body.style.background="black";
    document.body.innerHTML="<h1>illigal action </h1>"
}
}

function upload_pic() {
    var input = document.getElementById("upload_pic");
    // alert(input.files[0].name);   if we want to get the name of the picutre uploaded
    // alert(input.files[0].size);    it will show the size of the pic in the byte
    if (input.files[0].size < 10000000)
     {
        var freader = new FileReader();
        freader.readAsDataURL(input.files[0]);
        freader.onloadend = function (event) {
            var pic_url=event.target.result;
            var show = document.getElementById("upload");
            show.style.background = "url(" + event.target.result + ")";
            //event.target.result return the url of the image
            show.style.backgroundRepeat = "no-repeat";
            show.style.backgroundSize = "cover";
            var btn_show=document.getElementById("btn").style;
            btn_show.display="block";
            var buton=document.getElementById("btn");
            buton.onclick=function()
            {
                localStorage.setItem(sessionStorage.getItem("user_email")+"pic_url",pic_url);
                document.getElementById("mainpage").style.display="none";
                window.location=location.href;

            }
        }
    }
    else
{
   // alert("hii");
    document.getElementById("para").innerHTML = "pic should be less than 1mb";
}
}

on_load_page();
function on_load_page() {
    var result = document.getElementById("print");
    var user_mail = sessionStorage.getItem('user_email');
    var user_detail = localStorage.getItem(user_mail);
    var user_input = JSON.parse(user_detail);
    console.log(user_input.name)
    var data=user_input.name;
    var data_decode=atob(data)
    result.innerHTML = "welcome!" + data_decode;

}
pic_chek();
function pic_chek(){
    
  if(localStorage.getItem(sessionStorage.getItem("user_email")+"pic_url")!=null)
{
    document.getElementById("mainpage").style.display="none";
}
}
showing_name_pic();
function showing_name_pic()
{
var data=sessionStorage.getItem("user_email");
var user_data=localStorage.getItem(data);
var userdata_texttype=JSON.parse(user_data);
var username=userdata_texttype.name;
document.getElementById("name").innerHTML=atob(username);
var pic_box=document.getElementById("profile-pic");
var pic_data=localStorage.getItem(data+"pic_url");
pic_box.style.background="url("+pic_data+")";
pic_box.style.backgroundRepeat="no-repeat";
pic_box.style.backgroundSize="cover";
}
function logout()
{
    sessionStorage.clear();
    var plese=document.getElementById("wait");
    plese.innerHTML="please wait...";
    setTimeout(function(){
      window.location="../index.html";
    },2000);
}




