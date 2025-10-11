var website = ""; var link = ""; var social=""; var strlinks1=""; var strlinks2="";
var loca = window.location.pathname;
var wpath = loca.substring(0, loca.lastIndexOf("/"));
var dName = wpath.substring(wpath.lastIndexOf(".")+1);
if(dName!=="io"){var website = "../";}
function funclinks(){
link += "<li><a href='" + website + "index.html'>الصفحة الرئيسية</a></li>";

link += "<li><a href='" + website + "reqactive.html'>طلب رمز تفعيل</a></li>";

document.getElementById("links").innerHTML=link;

strlinks1 += "<a href=''></a><br>";
document.getElementById("links1").innerHTML=strlinks1;

strlinks2 += "<a href=''></a><br>";
document.getElementById("links2").innerHTML=strlinks2;

//social += "<a href='https://codepen.io/'><i class='fa fa-codepen'></i></a>";
//social += "<a href='https://www.linkedin.com/in/'><i class='fa fa-linkedin-square'></i></a>";
//social += "<a href='https://www.facebook.com/'><i class='fa fa-facebook-square'></i></a>";
//social += "<a href=''><i class='fa fa-twitter'></i></a>";
//social += "<a href='https://www.youtube.com/'><i class='fa fa-youtube'></i></a>";
//social += "<a href=''><i class='fa fa-whatsapp'></i></a>";
//social += "<a href='https://www.instagram.com/'><i class='fa fa-instagram'></i></a>";
social += "<a href='reqactive.html'><i class='fa fa-envelope'></i></a>";
document.getElementById("sociallinks").innerHTML=social;
}