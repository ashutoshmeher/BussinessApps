window.onload = function () {
    var x = document.getElementById("contactname").children.length;
    if (x == 0) {
        document.getElementById("cont-list").innerHTML = "NO CONTACT";
    }
}
set_pic();
function set_pic() {
    var pic = document.getElementById("pic-box");
    var data = localStorage.getItem(sessionStorage.getItem("user_email") + "pic_url");
    // console.log(data);
    pic.style.background = "url(" + data + ")";
    pic.style.backgroundRepeat = "no-repeat";
    pic.style.backgroundSize = "cover";
}
function chek_data() {
    var fullname = document.getElementById("name").value;
    var pcon = document.getElementById("primarycontact").value;
    var scon = document.getElementById("secondarycontact").value;
    if (fullname != "" && pcon != "" && scon != "") {
       // console.log("hii");
        var objdata = { fullname: fullname, pcon: pcon, scon: scon };
        var txtdata = JSON.stringify(objdata);
        localStorage.setItem(fullname + " contact", txtdata);
        var form = document.getElementById("form-box");
        form.reset();
        var add_success = document.getElementById("success");
        add_success.innerHTML = "contact saved successfully!!";
        setTimeout(function () {
            add_success.innerHTML = "";
        }, 3000)
        window.location = location.href;
    }
    else {
        alert("please fill all the field");
    }
}

show_contact();
function show_contact() {
   // console.log(localStorage.key(4))
    var i;
    for (i = 1; i <= localStorage.length; i++) {
      //  console.log(localStorage.length)
      //  console.log(i)
        var keys = localStorage.key(i);
      //  console.log(keys);
        if (keys.match("contact")) {
            var userdata = localStorage.getItem(keys);
            var user_decode_data = JSON.parse(userdata);
            var con = document.getElementById("contactname")
            var fieldset = document.createElement("FIELDSET");
            var legend = document.createElement("LEGEND");
            var ol = document.createElement("OL");
            var trash1 = document.createElement("I");
            trash1.setAttribute("id", "delete-icon");
            trash1.setAttribute("class", "fa fa-trash");
            trash1.setAttribute("title", "delete contact");
            // trash1.setAttribute("key","")
            var edit = document.createElement("I");
            edit.setAttribute("id", "edit-icon");
            edit.setAttribute("class", "fa fa-edit");
            edit.setAttribute("title", "edit contact");
            var li_one = document.createElement("LI");
            var span = document.createElement("span");
            var save = document.createElement("I");
            save.setAttribute("id", "save-icon");
            save.setAttribute("class", "fa fa-save");
            save.setAttribute("title", "save here");
            var trash2 = document.createElement("I");
            trash2.setAttribute("id", "delete-icon");
            trash2.setAttribute("class", "fa fa-trash");
            trash2.setAttribute("title", "delete contact");
            var li_two = document.createElement("LI");
            con.appendChild(fieldset);
            fieldset.appendChild(legend);
            fieldset.appendChild(ol);
            li_one.appendChild(document.createTextNode(user_decode_data.pcon));
            li_one.appendChild(trash1);
            li_two.appendChild(document.createTextNode(user_decode_data.scon));
            li_two.appendChild(trash2);
            ol.appendChild(edit);
            ol.appendChild(save);
            

            // console.log(document.createTextNode(user_decode_data.fullname));
            legend.appendChild(document.createTextNode(user_decode_data.fullname));
            if (user_decode_data.pcon == null) {
            }
            else {
                ol.appendChild(li_one);
            }
            if (user_decode_data.scon == null) {
            }
            else {
                ol.appendChild(li_two);
            }
            ol.appendChild(span);
            span.append(document.createTextNode("contact saved successfully!!"))
            span.style.color = "red";
            span.style.fontWeight = "bold";
            span.style.float = "right";
            span.style.display = "none";
            //  save.style.display = "none";
            del_contact1(keys, trash1, li_one, legend);  //here keys will send the contact key
            del_contact2(keys, trash2, li_two, legend);
           // edit_contact(keys, edit, save, span);
             my_logic_edit(keys,edit);
             my_logic_save(keys,save);
        }
    }
}

//                    my logic for editing
function my_logic_save(contact_name,resave)
{
    resave.onclick=function(){

        var userdata = localStorage.getItem(contact_name);
    var user_decode_data = JSON.parse(userdata);
        var txt=document.getElementById("name").value;
       
        var num1=document.getElementById("primarycontact").value;
        var num2=document.getElementById("secondarycontact").value;
        var objdata = { fullname:txt, pcon:num1, scon: num2};
            var txtdata = JSON.stringify(objdata);
            localStorage.setItem(contact_name, txtdata); 
            window.location=location.href;
}
}
function my_logic_edit(contact_name,re_edit)
{
    re_edit.onclick=function()
    {  var add_success = document.getElementById("success");
    add_success.innerHTML="edit here";
        var userdata = localStorage.getItem(contact_name);
        var user_decode_data = JSON.parse(userdata);
       // var succ=document.getElementById("success").innerHTML="Edit here";
        var txt=document.getElementById("name").value=user_decode_data.fullname;
        var num1=document.getElementById("primarycontact").value=user_decode_data.pcon;
        var num2=document.getElementById("secondarycontact").value=user_decode_data.scon;

    }
}


//my logic for editing


function del_contact1(contact_name, del_btn, fist_li, len) {
    del_btn.onclick = function () {
        var sure = window.confirm("are you sure");
        if (sure == true)
            var x = localStorage.getItem(contact_name);
        var y = JSON.parse(x);
        document.cookie=contact_name+"="+"{ fullname:"+y.fullname+",pcon:"+y.pcon+",scon:"+null+"}";
    
        var objdata = { fullname: y.fullname, pcon: null, scon: y.scon };
        var txtdata = JSON.stringify(objdata);
        localStorage.setItem(contact_name, txtdata);
        var obj_data = localStorage.getItem(contact_name);
        var txt_data = JSON.parse(obj_data);
        //document.cookie=contact_name+"="+localStorage.getItem(contact_name)+";max-age:259200";
        fist_li.remove();
       // console.log(txt_data.pcon, txt_data.scon);
        if (txt_data.pcon == null && txt_data.scon == null) {
            document.cookie=contact_name+"="+"{ fullname:"+y.fullname+",pcon:"+y.pcon+",scon:"+y.scon+"}";
          
            localStorage.removeItem(contact_name);
            len.remove();
            window.location = location.href;
        }
    }
}
function del_contact2(contact_name, del_btn, last_li, len) {
    del_btn.onclick = function () {
  
        var sure = window.confirm("are you sure");
        if (sure == true) {
            var x = localStorage.getItem(contact_name);
            var y = JSON.parse(x);
         
          
            document.cookie=contact_name+"="+"{ fullname:"+y.fullname+",pcon:"+null+",scon:"+y.scon+"}";
   
           // document.cookie=contact_name+"="+localStorage.getItem(contact_name)+";max-age:259200";
            var objdata = { fullname: y.fullname, pcon: y.pcon, scon: null };
            var txtdata = JSON.stringify(objdata);
            localStorage.setItem(contact_name, txtdata);
            var obj_data = localStorage.getItem(contact_name);
            var txt_data = JSON.parse(obj_data);
            last_li.remove();
           // document.cookie=contact_name+"="+localStorage.getItem(contact_name)+";max-age:259200";
           // console.log(txt_data.pcon, txt_data.scon);
            if (txt_data.pcon == null && txt_data.scon == null) {
            
                document.cookie=contact_name+"="+"{ fullname:"+y.fullname+",pcon:"+y.pcon+",scon:"+y.scon+"}";
               
                localStorage.removeItem(contact_name);
                len.remove();
                window.location = location.href;
            }
        }
    }
}

//                          my way start  
function search_contact()
{  document.getElementById("contactname").innerHTML="";
    var search=document.getElementById("sea-rch").value;
    var a=localStorage.key(search);
    var i;
    for(i=0;i<localStorage.length;i++)
     {
        //var z=localStorage.key(i).charAt(i).match(search)
    //     console.log(z);
         var name=localStorage.key(i);
         var char=name.charAt(i);
         var searchchar=search.charAt(i)
        //   console.log(char);
        var x=localStorage.key(i).match(search) && localStorage.key(i).match("contact");
    var y=localStorage.key(i);
        if(x)
        {
            // console.log(localStorage.getItem(y)); 
            var userdata = localStorage.getItem(y);
            var user_decode_data = JSON.parse(userdata);
            var con = document.getElementById("contactname")
            var fieldset = document.createElement("FIELDSET");
            var legend = document.createElement("LEGEND");
            var ol = document.createElement("OL");
            var trash1 = document.createElement("I");
            trash1.setAttribute("id", "delete-icon");
            trash1.setAttribute("class", "fa fa-trash");
            trash1.setAttribute("title", "delete contact");
            // trash1.setAttribute("key","")
            var li_one = document.createElement("LI");
            var trash2 = document.createElement("I");
            trash2.setAttribute("id", "delete-icon");
            trash2.setAttribute("class", "fa fa-trash");
            trash2.setAttribute("title", "delete contact");
            var li_two = document.createElement("LI");
            con.appendChild(fieldset);
            fieldset.appendChild(legend);
            fieldset.appendChild(ol);
            li_one.appendChild(document.createTextNode(user_decode_data.pcon));
            li_one.appendChild(trash1);
            li_two.appendChild(document.createTextNode(user_decode_data.scon));
            li_two.appendChild(trash2);
            // console.log(document.createTextNode(user_decode_data.fullname));
            legend.appendChild(document.createTextNode(user_decode_data.fullname));
                ol.appendChild(li_one);
                ol.appendChild(li_two);
            }

        }
    }

//  my way end

// function search_contact(user_input) {
//     // console.log(user_input.nodeName);  //  it will return the name of the tag
//     var keyword = user_input.value.toUpperCase();   //it will give the value in the input value
//     //we have used to uppercase becz it will search in upercase also
//     var cont_list = document.getElementById("contactname");
//     //here we have used the keyword.getelementbyid becz we only want to contactname inside the tag but document will select whole body
//     //when we use tag name we write  in capital
//     var legend = cont_list.getElementsByTagName("LEGEND");
//     var i;
//     for (i = 0; i < legend.length; i++) {
//         if (legend[i].innerHTML.toUpperCase().indexOf(keyword) != -1) {
//             legend[i].parentElement.style.display = "";
//         }
//         else {
//             legend[i].parentElement.style.display = "none";
//         }
//     }

// }
// function edit_contact(contact_name, re_edit, re_save, span) {
//     re_edit.onclick = function ()
//      {
//         re_save.style.display = "block";
//         var ol = this.parentElement;
//         var fieldset = ol.parentElement;
//         var legend = document.getElementsByTagName("LEGEND");
//         var li = document.getElementsByTagName("LI");
//         var oldname;
//         var newname;
//         legend[0].setAttribute("contenteditable", "true");
//         legend[0].focus();
//         legend[0].onclick = function () {
//             oldname = legend[0].innerHTML;
//             //console.log(oldname);
//         }
//         legend[0].onblur = function () {
//             newname = legend[0].innerHTML;
//            // console.log(newname);
//         }
//         var i;
//         for(i=0;i<li.length;i++) 
//         {
//             li[i].setAttribute("contenteditable","true");
//         }
//         var oldnumber = [];
//         var newnumber = [];
//         li[0].onclick=function()
//         {
//             oldnumber[0]=li[0].innerHTML;
//         }
//         li[1].onclick=function()
//         {
//             oldnumber[1]=li[1].innerHTML;
//         }
//         li[0].onblur=function()
//         {
//             newnumber[0]=li[0].innerHTML;
//         }
//         li[1].onblur=function()
//         {
//             newnumber[1]=li[1].innerHTML;
//         }
     
//     re_save.onclick=function()
//     {
//         console.log(newname);
//         var objdata = { fullname:newname, pcon:newname[0], scon:newname[1]};
//         var txtdata = JSON.stringify(objdata);
//         var txt=localStorage.getItem(contact_name)
//         localStorage.setItem(contact_name, txt.replace(txt,txtdata));   
//         window.location=location.href;
//     }
//      }
// }
function restore_contact()
{ 
    var page=document.getElementById("restore-contact");
    var restore_table=document.getElementById("restore-table");
    page.style.height="100vh";
    // page.style.display="none";
    page.style.transition="0.5s";
    var notice=document.getElementById("restore-notice");
    notice.innerHTML="DELETED CONTACT";
    if(document.cookie.length!=0)
    {

    }
}
function logout()
{
    sessionStorage.clear();
    var plese=document.getElementById("wait");
   // plese.innerHTML="please wait...";
    setTimeout(function(){
      window.location="../../../index.html";
    },2000);
}




