var name = document.getElementById("Name").addEventListener("click", function(){
    document.getElementById("Name").addEventListener("mouseout", afterName)
});

var container = document.getElementById("container");
var form = document.getElementById("the-form");
var getLocation = document.createElement("SELECT");
var location1 = document.createElement("OPTION");
var location2 = document.createElement("OPTION");
var location3 = document.createElement("OPTION");
var location4 = document.createElement("OPTION");
location1.innerHTML = "Lagos";
location1.addEventListener("click", afterLocation);

location2.innerHTML = "Abuja";
location2.addEventListener("click", afterLocation);

location3.innerHTML = "Ibadan";
location3.addEventListener("click", afterLocation);

location4.innerHTML = "Port Harcourt";
location4.addEventListener("click", afterLocation);



function afterName(){
    //alert("Done!");
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Select your location";

    container.appendChild(paragraph);
    getLocation.appendChild(location1);
    getLocation.appendChild(location2);
    getLocation.appendChild(location3);
    getLocation.appendChild(location4);
    container.appendChild(getLocation);

    //Should probably check to see if the value is changed before I do all of this.
}

function afterLocation(){

}