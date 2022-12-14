
 show_secondary();
 function show_secondary()
 {
    var box_btn=document.getElementById("box");
    var primary_btn=document.getElementById("primary-box");
    var sec_btn=document.getElementById("sec_box");
    var close_btn=document.getElementById("close");
    var fo_rm=document.getElementById("form");
    box_btn.onclick=function()
    { alert("1")
      //  if(sec_btn.style.display!="none")
      {
       this.style.webkitTransform="rotateX(180deg)";
       this.style.transform="rotateX(180deg)";
       this.style.transition="1s";
       primary_btn.style.display="none";
       setTimeout(function(){
          sec_btn.style.display="block";
          // sec_btn.style.webkitTransform="rotateX(-180deg)";
           sec_btn.style.transform="rotateX(-180deg)";
           close_btn.onclick=function()
           {
            box_btn.className="animated flipInX";
            // sec_btn.style.display="none";
           box_btn.innerHTML="<i class='fa fa-balance-scale' id='icon'>&nbsp&nbspunit measure</i> ";
           }
           fo_rm.onsubmit=function()
           {
            var input =sec_box.getElementsByTagName("INPUT");
               var symbol=input[0].value;
               var formal=input[0].value;
               var input_data={symbol:symbol,formal_name:formal};
               var object_data=JSON.stringify(input_data);
               localStorage.setItem("unit_of_measure_"+symbol,object_data);
           }
       },500)
    }}
 }
 hide_sales();
 function hide_sales(){
   var sales_btn=document.getElementById("box2");
   var sales_box=document.getElementById("table-box");
   sales_btn.onclick=function()
   {
      sales_box.style.display="block";
      sales_box.className="animated slideInDown";
      var tax_display=document.getElementById("tx-name");
      var i;
      for(i=0;i,localStorage.length;i++)
      {
         var tax_name=localStorage.key(i);
         if(tax_name.indexOf("tax")!=-1)
         {
            var tax_item=localStorage.getItem(tax_name);
            var extract=JSON.parse(tax_item);
            tax_display.innerHTML+=extract.name_of_tax+"("+extract.tax_qty+")<br>";
            //here we have given + after the innerHtml becz we can display the previous data
            var tx_value=document.getElementById("tx-value");
            var sub_total=document.getElementById("total").innerHTML;
            tx_value.innerHTML+=sub_total+"<br>";
         }
      }
   }
 }

 close_invoice();
 function close_invoice()
 {var close_invoice=document.getElementById("close_box");
   var sales_box=document.getElementById("table-box");
   close_invoice.onclick=function(){
      sales_box.className="animated slideOutUp"
   }
 }
 voucher_logo_detail();
 function voucher_logo_detail()
 {
   var voucher_logo_pic=document.getElementById("voucher-logo");
   voucher_logo_pic.style.background="url("+localStorage.getItem("companylogo")+")";
   voucher_logo_pic.style.backgroundRepeat="no-repeat";
   voucher_logo_pic.style.backgroundSize="cover";
   voucher_detail=document.getElementById("voucher-details");
   var input_data=localStorage.getItem("company");
   var obj_data=JSON.parse(input_data);
   voucher_detail.innerHTML="<div style='font-size:30px;text-transform:capitalize;font-family:sans-serif;font-weight:bold'>"+obj_data.user_name+"</div><address style=''font-size:20px;>venue:"+obj_data.user_address+"</address>";
   
 }
//                   adding item
adding_item()
function adding_item()
{  var add_item_btn=document.getElementById("add-product-item");
   add_item_btn.onclick=function()
   {
     add_prod_btn();
   }
}
var sum=0;
function add_prod_btn()
{
   var prod_table=document.getElementById("costumer-product");
   var tr=document.createElement("TR");
   var td_item=document.createElement("TD");
   var td_price=document.createElement("TD");
   var td_qty=document.createElement("TD");
   var td_amount=document.createElement("TD");
   var td_del=document.createElement("TD");
   var input_item=document.createElement("INPUT");
   input_item.type="text";
   input_item.className="item";
   input_item.placeholder="product name";
   var input_price=document.createElement("INPUT");
   input_price.type="number";
   input_price.placeholder="0.00";
   input_price.disabled=true;
   var input_qty=document.createElement("INPUT");
   input_qty.type="number";
   input_qty.placeholder="1";
   input_qty.disabled=true;
   var input_amount=document.createElement("INPUT");
   input_amount.type="number";
   input_amount.placeholder="0.00";
   input_amount.className="amount";
   var del_icon=document.createElement("I");
   del_icon.className="fa fa-trash";
   del_icon.id="delete-row";
   prod_table.append(tr);
   tr.append(td_item);
   tr.append(td_price);
   tr.append(td_qty);
   tr.append(td_amount);
   tr.append(td_del);
   td_item.append(input_item);
   td_price.append(input_price);
   td_qty.append(input_qty);
   td_amount.append(input_amount);
   td_del.append(del_icon);
   // del_icon.align="center";
   del_icon.onclick=function()
   {
      var del_icon_td=this.parentElement;
      var delete_col=del_icon.parentElement;
      var delete_row=delete_col.parentElement;
      delete_row.remove(); 
   }
   input_amount.onkeydown=function()
   {// onkeydown means pressing the key
      return false;
   }
   input_amount.oncontextmenu=function()
   {
      return false;
   }
   input_item.oninput=function()
   {
      input_price.disabled=false;
      input_price.oninput=function()
      { 
         total_add(input_price.value,input_qty.value,input_amount);
          input_qty.disabled=false;
         input_qty.oninput=function()
         {   
            total_add(input_price.value,input_qty.value,input_amount)
          input_amount.value=input_price.value*input_qty.value;
          this.onkeyup=function(event){
            if(event.keyCode==13)
            {
               document.getElementById("add-product-item").click();
               var items=document.getElementsByClassName("item");
               items[(items.length)-1].focus();
            }
          }
            
         }
      
      }
   }
}
alert(document.getElementById('perce-ntage').innerHTML);

function total_add(a,b,c)
{
c.value=a*b;
         // var total_price=document.getElementById("total");
         // sum=sum+Number(c.value);   
         // total_price.innerHTML=sum;
         var tax_value=document.getElementById("tx-value");
         tax_value.innerHTML="";
         var amount_input=document.getElementsByClassName("amount");
         var i;
         var sum=0;
         console.log(amount_input.length);
         for(i=0;i<amount_input.length;i++)
         { sum=sum+Number(amount_input[i].value);
           console.log(sum)
           document.getElementById("total").innerHTML="<i class='fa fa-rupee'>"+sum+"</i>";
         }
         
         var j;
         var reserve=0
         for (j=0;j<localStorage.length;j++)
         {
            var tax_name=localStorage.key(j);
            if(tax_name.indexOf("tax")!=-1)
            { 
               var tax=localStorage.getItem(tax_name);
               var print_tax=JSON.parse(tax);
               // reserve+=print_tax.tax_qty+"<br>";
               // tax_value.innerHTML=reserve.replace(0,"");
            tax_value.innerHTML+="<span id='perce-ntage'>"+print_tax.tax_qty+"</span><br>";
         }
      }
       

}

 


pic();
function pic()
{
 { 
  var pic_container=document.getElementById("pic-box");
  var image_name = localStorage.getItem(sessionStorage.getItem("user_email") + "pic_url");
  pic_container.style.background="url("+image_name+")";
  pic_container.style.backgroundSize="cover";
  pic_container.style.backgroundRepeat="no-repeat";
  var circle_img=localStorage.getItem("companylogo");
  var cir_cle=document.getElementById("circle");
  cir_cle.style.background="url("+circle_img+")";
  cir_cle.style.backgroundSize="cover";
  cir_cle.style.backgroundRepeat="no-repeat";

 }
}



showing_date();
function showing_date()
{
   var date_time=new Date();
   var date= date_time.toLocaleDateString();
   var display_date=document.getElementById("date");
    var dy=date_time.getDate();
   var month=date_time.getMonth()+1;
   var year=date_time.getFullYear();
   display_date.innerHTML+=year+"-"+month+"-"+dy;

}
tax_calc();
function tax_calc(){
   var tax_line=document.getElementById("tax-line");
   var tax_box=document.getElementById("box4");
   tax_line.onclick=function()
   { if(tax_box.offsetHeight==55){
       
      tax_box.style.height="220px";
      tax_box.style.transition="0.5s";  
     
   }
   else{
      tax_box.style.height="55px";
      tax_box.style.transition="0.5s"; 
     
   }
   var tax_text_val=document.getElementById("tax-name");
   var tex=document.getElementById("taxes");
   tax_text_val.onchange=function()
   {  
      if(this.value.indexOf("tax")!=-1)
      {
         tex.oninput=function()
         {
            
            if(tex.value.charAt(0).indexOf("%")==-1)
            {
                document.getElementById("tax-box").onsubmit=function()
                {
             
                  if(tex.value.indexOf("%")!=-1)
                  {
                     var regexp=/[a-z!=@#+$_^&*({;:"'|\][?/<,.>})-]/i;
                     if(tex.value.match(regexp)==null)
                     {
                        var name_of_tax=document.getElementById("tax-name");
                        console.log(name_of_tax.value)
                        var tax_qty=document.getElementById("taxes");
                        console.log(tax_qty.value);
                        var tax_input={name_of_tax:name_of_tax.value,tax_qty:tax_qty.value};
                        var tax_obj=JSON.stringify(tax_input);
                        localStorage.setItem(name_of_tax.value,tax_obj);
                    
                        
                     }
                     else{
                        alert("only 0-9 & % allowed");
                        return false;
                     }
                  }
                  else{
                       alert("% not found");
                       return false;
                  }
                }
            }
            else{
               this.className="animated infinite pulse";
               this.value="% not allowed at first place";
               this.style.border="2px solid red";
               this.style.color="red";
               this.onclick=function()
               {
                  this.className="";
               this.value="";
               this.style.border="";
               this.style.color="";
               }
            }
         }
      }
      else{
         this.className="animated infinite pulse";
         this.style.border="2px solid red";
         this.value="must include tax";
         this.style.color="red";
         this.onclick=function()
         {
            this.className="";
         this.style.border="";
         this.value="";
         this.style.color="";
         }
      }
   }
}
}
 comp_name();
 function comp_name()
 {
    var obj_data=localStorage.getItem("company");
    var txt_data=JSON.parse(obj_data);
    var name=document.getElementById("comp_name");
    name.innerHTML=txt_data.user_name;
 }




