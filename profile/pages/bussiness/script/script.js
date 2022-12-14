
///// displaycompany name

profile_pic();
function profile_pic() {
    var pic_box = document.getElementById("pic-box");
    var image_name = localStorage.getItem(sessionStorage.getItem("user_email") + "pic_url");
    pic_box.style.background = "url(" + image_name + ")";
    pic_box.style.backgroundRepeat = "no-repeat";
    pic_box.style.backgroundSize = "cover";
}
button_hover();
function button_hover() {
    var button = document.getElementsByTagName("BUTTON");
    var i;
    for (i = 0; i < button.length; i++) {
        button[i].onmouseover = function () {
            this.className = "animated pulse";
        }
        button[i].onmouseout = function () {
            this.className = "";
        }
    }
}
//             open create company function 
open_form();
function open_form() {
    var button = document.getElementsByTagName("BUTTON")[0];
    var form_box = document.getElementById("form-box");
    button.onclick = function () {
        if (form_box.offsetHeight == 0) {
            // alert("close");
            this.innerHTML = "close";
            form_box.style.display = "block";
            form_box.style.height = "180px";
            // form_box.style.transition="1s";
            form_box.className = "animated fadeInDown"
        }
        else {
            form_box.style.height = "";
            form_box.style.transition = "0.5s";
            form_box.style.display = "none";
            this.innerHTML = "create company";
        }
    }
}
//                         form validation
form_validation();
function form_validation() {
    var user_name = document.getElementById("companyname");
    var mail_name = document.getElementById("mailingname");
    var user_address = document.getElementById("address");
    var user_phone = document.getElementById("phone");
    var user_website = document.getElementById("website");
    var user_fax = document.getElementById("fax-number");
    var user_stock = document.getElementById("stock-type");
    var user_mail = document.getElementById("email");
    var fin_year = document.getElementById("finincial-year");
    user_name.onchange = function () {
        if (isNaN(this.value)) {
            mail_name.onchange = function () {
                if (user_name.value == this.value) {
                    this.value = "oops company and mailing should not be equal"
                    this.className = "animated infinite pulse"
                    this.style.color = "red";
                    this.style.border = "2px solid  red";
                    mail_name.onclick = function () {
                        this.value = "";
                        this.className = ""
                        this.style.color = "inherit";
                        this.style.border = "inherit";
                    }
                }
                else {
                    if (this.value.indexOf(user_name.value + "pvt.ltd") != -1 || this.value.indexOf(user_name.value + "govt.ltd") != -1) {
                        fin_year.onchange = function () {
                            var current_date = new Date();
                            // getMonth() for month bute we can use this if we have used new Date()method add one due to indexing no.
                            //getFullYear for the yar 
                            //getDate for the date we have to add one due to indexing no.
                            var selected_date = new Date(fin_year.value);
                            // we have used date because to convert fin_year to the date format value
                            if (selected_date.getFullYear() >= current_date.getFullYear()) {
                                if (selected_date.getMonth() + 1 == 4) {
                                    if (selected_date.getDate() == 1) {
                                        var form = document.getElementById("form");
                                        form.onsubmit = function ()
                                         {
                                            var user_detail =
                                            {
                                                user_name: user_name.value,
                                                mail_name: mail_name.value,
                                                user_address: user_address.value,
                                                user_phone: user_phone.value,
                                                user_fax: user_address.value,
                                                user_mail: user_mail.value,
                                                user_website: user_website.value,
                                                fin_year: fin_year.value,
                                                user_stock: user_stock.value
                                            }
                                            var user_data = JSON.stringify(user_detail);
                                            localStorage.setItem("company", user_data);
                                            form.innerHTML="<center><i class='fa fa-circle' style='text-align:center;font-size:50px;color:red'></i><br><h1 style='font-family:sans-serif;font-size:30px;padding:0px;margin:0px;text-align:center;color:yellow'>company created successfully</h1><br><button id='click-here'>click here</button></center>";
                                            document.getElementById("click-here").onclick=function(){
                                                window.location=location.href;
                                            }

                                           

                                        }
                                    }
                                    else {
                                        this.type = "text";
                                        this.value = "only 1st date  allowed";
                                        this.className = "animated infinite pulse"
                                        this.style.color = "red";
                                        this.style.border = "2px solid  red";
                                        this.onclick = function () {
                                            this.type = "date";
                                            this.className = ""
                                            this.style.color = "black";
                                            this.style.border = "inherit";
                                        }
                                    }
                                }
                                else {
                                    this.type = "text";
                                    this.value = "only four month allowed";
                                    this.className = "animated infinite pulse"
                                    this.style.color = "red";
                                    this.style.border = "2px solid  red";
                                    this.onclick = function () {
                                        this.type = "date";
                                        this.className = ""
                                        this.style.color = "black";
                                        this.style.border = "inherit";
                                    }
                                }
                            }
                            else {
                                this.type = "text";
                                this.value = "whoops passed year not allowed";
                                this.className = "animated infinite pulse"
                                this.style.color = "red";
                                this.style.border = "2px solid  red";
                                this.onclick = function () {
                                    this.type = "date";

                                    this.className = ""
                                    this.style.color = "black";
                                    this.style.border = "inherit";
                                }
                            }
                        }
                    }
                    else {
                        this.value = "mention pvt ltd or govt ltd";
                        this.className = "animated infinite pulse"
                        this.style.color = "red";
                        this.style.border = "2px solid  red";
                        this.onclick = function () {
                            this.value = "";
                            this.className = ""
                            this.style.color = "inherit";
                            this.style.border = "inherit";
                        }
                    }
                }
            }
        }
        else {
            this.value = "oops! numbe is not allowed";
            this.className = "animated infinite pulse"
            this.style.color = "red";
            this.style.border = "2px solid  red";
            this.onclick = function () {
                this.value = "";
                this.className = ""
                this.style.color = "inherit";
                this.style.border = "inherit";
            }
        }
    }

}

delete_company();
function delete_company() {
    var dele = document.getElementById("delete");
    dele.onclick = function () {
      
        var notice = document.getElementById("delete-notice");
        if (localStorage.getItem("company") != null) {
            notice.style.display = "block";
            notice.className = "animated fadeInDown";
            var ok_btn = document.getElementById("ok");
            ok_btn.onclick = function () {
                localStorage.removeItem("company");
                localStorage.removeItem("companylogo");
                window.location = location.href;

            }
            var cancel_btn = document.getElementById("cancel");
            cancel_btn.onclick = function () {
                notice.style.display = "none";
            }
        }
        else {
            notice.style.display = "block";

            notice.className = "fadeInDown";
            notice.innerHTML = "no company found";
            setTimeout(function () {
                notice.style.display = "none";
            }, 3000);
        }
    }
}
log_out();
function log_out()
{
    var logout_icon = document.getElementById("logout");
    logout_icon.onclick = function () {
        sessionStorage.clear();
        var log_notice = document.getElementById("log-out-notice");
        log_notice.style.display = "block";
        setTimeout(function () { log_notice.style.display = "none"; }, 5000);
        window.location = "../../../index.html";
    }
}
check_company();
function check_company()
{
    // alert(localStorage.getItem("company"));
    if(localStorage.getItem("company"))
    {   
      document.getElementById("form-box").remove();
        var obj_data = localStorage.getItem("company");
        var txt_data = JSON.parse(obj_data);
        var brand_name = document.getElementById("create");
        brand_name.innerHTML = txt_data.user_name;
        brand_name.style.color = "red";
        var icon = document.getElementById("company-icon");
        icon.className = "fa fa-upload animated infinite flash";
        icon.title = "upload company image 100*100";
        icon.onclick = function () 
        {
            var newtag = document.createElement("INPUT");
            newtag.type = "file";
            newtag.accept = "images/*";
            newtag.click();
            newtag.onchange = function () 
            {
                if (this.files[0].size > 512000)
                {
                   
                    var warn = document.getElementById("warnining");
                    warn.className = "fa fa-warning";
                    warn.innerHTML = "upload less than 512kb image";
                }
                else
                {
                 
                    // var warn = document.getElementById("warnining");
                    // warn.remove();
                 
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function ()
                    {
                        localStorage.setItem("companylogo", reader.result);
                        window.location=location.href;
                       
                    }

                }

            }
        }
        brand_name.onclick=function()
        {
            window.location="bussinss_assest/accounts_only.html"
        }
    }
}
showcompanylogo();
function showcompanylogo() {
    if(localStorage.getItem("companylogo")!=null)
    { var ic_on = document.getElementById("company-icon");
        // console.log(icon.className);  
    ic_on.className=" ";
    console.log(ic_on.className);
    ic_on.style.background = "url(" + localStorage.getItem('companylogo') + ")";
    ic_on.style.backgroundSize = "cover";
    ic_on.style.backgroundRepeat = "no-repeat";
    ic_on.onclick = function () {
        return false;
    }
}
}






