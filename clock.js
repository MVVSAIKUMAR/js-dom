//Q: Accessing the p tag having id ="text"

let a = document.getElementById("text");
console.log(a);


//Q. Accessing h1 
let b= document.getElementsByTagName("h1");
console.log(b);
console.log(b[0].innerText);



//Q. accessing element having class name= "box"
let c=document.getElementsByClassName("box");
console.log(c);
console.log(c[0].innerText);



//Q.Changing "DOM" in h1 to "Dom practice)"
let d=document.getElementsByTagName("h1")
console.log(d[0].innerText="Dom practice"); 

//Q. difference between Window and document

// Window object : It is the top most object and outermost element of the object hierarchy as shown in Figure 1.
// Document object : Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page. Using document object, JavaScript can modify, add and delete the HTML elements, attributes CSS styles in the page
// The window object represents a window/tab containing a DOM document where as document object is property of window object that points to the DOM document loaded in that window.
// You can access a document object either using window.document property or using document object directly as window is global object.
// The other major difference is that both window object and document object have properties and methods. Few method names are same in both objects but with different behavior. In the below example window.open() opens a new tab or window and document.open() creates a blank document within the window


// Q "<h1> Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let f=document.getElementsByTagName("h1")[0];
f.setAttribute("id","heading")
document.getElementById("heading").style.color="red";



//Q. Change text on clicking button

function changeText(){
    document.getElementById("changeBut").innerText="Welcome to Elevation Academy";
}

//Q9 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function clock(){

    var hourss = document.getElementById("hours");
    var minutes = document.getElementById("mins");
    var seconds = document.getElementById("secs");
    var am_pm = document.getElementById("am"); 

    var time = new Date;
    var hour = time.getHours();
    var ampm = hour >=12 ? "PM" : "AM";
    var minute = time.getMinutes();
    var second = time.getSeconds();
    
    am_pm.innerHTML = ampm;
    hour= hour%12;
    hour = hour ? hour:12;
    
   if(hour<10){
        hour = "0"+hour; 
    }
    hours.innerHTML = hour;
    if(minute<10){
        minute= "0"+ minute;
    }
    minutes.innerHTML = minute;
    if(second<10){
        second ="0"+ second;
    }
    seconds.innerHTML = second;
}
setInterval(clock,1000);

//Q Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function getOption(){
    let text=document.getElementById("dropDown").value;
    document.getElementById("getText").innerText=text;
  }

