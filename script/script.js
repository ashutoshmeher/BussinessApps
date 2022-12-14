function open_box()
{
    var container=document.getElementById("form-box");
    container.style.display="block";
    container.style.animation="box 0.2s";
    container.style.animationFillMode="forwards";
}
function animation_close(){
    var container=document.getElementById("form-box");
    container.style.display="none";

}