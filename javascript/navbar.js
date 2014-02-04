var breadcrumbheader = document.querySelector('ul.breadcrumb');
var origBchOffsetY = breadcrumbheader.offsetTop;
var origBcClassName = breadcrumbheader.className;

var breadcrumbbutton = document.querySelector('div.breadcrumb-button');
var origBcbOffsetY = breadcrumbbutton.offsetTop;
var origBcbClassName = breadcrumbbutton.className;


function onBcScroll(e) {
  window.pageYOffset >= origBchOffsetY-5 ? breadcrumbheader.className += ' stickybreadcrumb' :
                                  breadcrumbheader.className = origBcClassName;
  window.pageYOffset >= origBcbOffsetY-5 ? breadcrumbbutton.className += ' stickybreadcrumbbutton' :
                                  breadcrumbbutton.className = origBcbClassName;
}

document.addEventListener ? document.addEventListener('scroll', onBcScroll) : document.attachEvent("onscroll","onSBcScroll");

var is_touch_device = 'ontouchstart' in document.documentElement;
if(is_touch_device){
	 var myalert = "touch is enabled!";
 }else{
	 var myalert = "this is a non touch screen";
	 var fileref=document.createElement("link");
	 fileref.setAttribute("rel","stylesheet");
	 fileref.setAttribute("type","text/css");
	 fileref.setAttribute("href","/theme/cleanpurple/style/editing.css");
	 document.getElementsByTagName("head")[0].appendChild(fileref);
 }
