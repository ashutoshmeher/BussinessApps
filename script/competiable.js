function browser_check()
{
    if(navigator.userAgent.indexOf('edg')!=-1)
    {
        var mainpage=document.getElementsById("webpage");
        mainpage.style.display="none";
        document.body.background="black";
        document.body.innerHTML="<h1 style='text-align:center;font-size:50px;'>please use other browser</h1>";
        document.body.color="white";
    }

}
browser_check();
function cookie_check()
{
    if(navigator.cookieEnabled==false)
    {
       // window.alert("hii");
       var x=document.getElementById("webpage");
        x.style.display="none";
        document.body.style.background="black";
        document.body.innerHTML="<h1 style='text-align:center;font-size:50px;'>please enable cookie</h1>";
        document.body.style.color="white";
    }
}
cookie_check();
