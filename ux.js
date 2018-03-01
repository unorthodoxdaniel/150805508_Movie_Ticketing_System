var nameBox = document.getElementById("Name").addEventListener("keydown", function(event){

    var x = event.keyCode;
    if (x == 13){ //Key code for Enter is 13
        event.preventDefault();
        collectAge();
    }
});

var container = document.getElementById("container");
var form = document.getElementById("the-form");

var form2 = document.createElement("FORM");

//Location
var getLocation = document.createElement("SELECT");

getLocation.addEventListener("change", selectCinema);

var location1 = document.createElement("OPTION");
var location2 = document.createElement("OPTION");
var location3 = document.createElement("OPTION");
var location4 = document.createElement("OPTION");

location1.innerHTML = "Lagos";

location2.innerHTML = "Abuja";

location3.innerHTML = "Ibadan";

location4.innerHTML = "Port Harcourt";

var chooseLocation = document.createElement("OPTION");
chooseLocation.innerHTML = "Choose Your Location:";


//Age
var getAge = document.createElement("INPUT");
getAge.setAttribute("placeholder", "Enter Your Age");
//getAge.addEventListener("change", selectMovie);
getAge.addEventListener("keydown", function(event){

    var x = event.keyCode;
    if (x == 13){ //Key code for Enter is 13
        event.preventDefault();
        selectMovie();
    }
});


//Cinemas
var cinema = document.createElement("SELECT");

cinema.addEventListener("change", displayShowTimes);

var chooseOption = document.createElement("OPTION");
chooseOption.innerHTML = "Choose Your Cinema:";

var silverbird = document.createElement("OPTION");
silverbird.innerHTML = "Silverbird Cinemas";

var ozone = document.createElement("OPTION");
ozone.innerHTML = "Ozone Cinemas";

var genesis = document.createElement("OPTION");
genesis.innerHTML = "Genesis Deluxe Cinemas";

var filmhouse = document.createElement("OPTION");
filmhouse.innerHTML = "Filmhouse Cinemas";

var viva = document.createElement("OPTION");
viva.innerHTML = "Viva Cinemas";

var ventura = document.createElement("OPTION");
ventura.innerHTML = "Ventura Cinemas";

//Movies: Poster, Title, Rating
var movies = document.createElement("div");
//movies.setAttribute("id", "movie-box");
movies.style.display = "flex";
movies.style.width = "100%";

//The clicking variables.
var blackClicked;
var fiftyClicked;
var jumanjiClicked;
var proudClicked;

//Black Panther
var blackPanther = document.createElement("div");
//blackPanther.setAttribute("class", "movie");
blackPanther.style.width = "25%";
blackPanther.addEventListener("click", selectLocation);
blackPanther.addEventListener("click", function(){
    blackClicked = true;
    this.style.backgroundColor = "white";
    this.style.color = "#101010";
    this.style.padding = "5px";

    if (proudClicked == true){
        proudClicked = false;
        proudMary.style.backgroundColor = "#101010";
        proudMary.style.padding = "0px";
        proudMary.style.color ="white"; 
    }
    else if (fiftyClicked == true){
        fiftyClicked = false;
        fiftyShadesFreed.style.backgroundColor = "#101010";
        fiftyShadesFreed.style.padding = "0px";
        fiftyShadesFreed.style.color ="white"; 
    }
    else if (jumanjiClicked == true){
        jumanjiClicked = false;
        jumanji.style.backgroundColor = "#101010";
        jumanji.style.padding = "0px";
        jumanji.style.color ="white"; 
    }

});

var title1 = document.createElement("p");
title1.innerHTML = "Black Panther";



var blackPantherPoster = document.createElement("img");
blackPantherPoster.setAttribute("src", "img/blackPanther.jpg");
//blackPantherPoster.setAttribute("class", "poster");
blackPantherPoster.style.width = "100%";

blackPanther.appendChild(blackPantherPoster);
blackPanther.appendChild(title1);


//Fifty Shades Freed
var fiftyShadesFreed = document.createElement("div");
//fiftyShadesFreed.setAttribute("class", "movie");
fiftyShadesFreed.style.width = "25%";
fiftyShadesFreed.addEventListener("click", selectLocation);

fiftyShadesFreed.addEventListener("click", function(){
    fiftyClicked = true;
    this.style.backgroundColor = "white";
    this.style.color = "#101010";
    this.style.padding = "5px";

    if (proudClicked == true){
        proudClicked = false;
        proudMary.style.backgroundColor = "#101010";
        proudMary.style.padding = "0px";
        proudMary.style.color ="white"; 
    }
    if (blackClicked == true){
        blackClicked = false;
        blackPanther.style.backgroundColor = "#101010";
        blackPanther.style.padding = "0px";
        blackPanther.style.color ="white"; 
    }
    if (jumanjiClicked == true){
        jumanjiClicked = false;
        jumanji.style.backgroundColor = "#101010";
        jumanji.style.padding = "0px";
        jumanji.style.color ="white"; 
    }
});
var title2 = document.createElement("p");
title2.innerHTML = "Fifty Shades Freed";

var fiftyShadesFreedPoster = document.createElement("img");
fiftyShadesFreedPoster.setAttribute("src", "img/fiftyShadesFreed.png");
//fiftyShadesFreedPoster.setAttribute("class", "poster");
fiftyShadesFreedPoster.style.width = "100%";

fiftyShadesFreed.appendChild(fiftyShadesFreedPoster);
fiftyShadesFreed.appendChild(title2);

//Jumanji
var jumanji = document.createElement("div");
//jumanji.setAttribute("class", "movie");
jumanji.style.width = "25%";
jumanji.addEventListener("click", selectLocation);
jumanji.addEventListener("click", function(){
    jumanjiClicked = true;
    this.style.backgroundColor = "white";
    this.style.color = "#101010";
    this.style.padding = "5px";

    if (proudClicked == true){
        proudClicked = false;
        proudMary.style.backgroundColor = "#101010";
        proudMary.style.padding = "0px";
        proudMary.style.color ="white"; 
    }
    if (blackClicked == true){
        blackClicked = false;
        blackPanther.style.backgroundColor = "#101010";
        blackPanther.style.padding = "0px";
        blackPanther.style.color ="white"; 
    }
    if (fiftyClicked== true){
        fiftyClicked = false;
        fiftyShadesFreed.style.backgroundColor = "#101010";
        fiftyShadesFreed.style.padding = "0px";
        fiftyShadesFreed.style.color ="white"; 
    }
});

var title3 = document.createElement("p");
title3.innerHTML = "Jumanji";

var jumanjiPoster = document.createElement("img");
jumanjiPoster.setAttribute("src", "img/jumanji.png");
//jumanjiPoster.setAttribute("class", "poster");
jumanjiPoster.style.width = "100%";

jumanji.appendChild(jumanjiPoster);
jumanji.appendChild(title3);


//Proud Mary
var proudMary = document.createElement("div");
//proudMary.setAttribute("class", "movie");
proudMary.style.width = "25%";
proudMary.addEventListener("click", selectLocation);

proudMary.addEventListener("click", function(){
    proudClicked = true;
    this.style.backgroundColor = "white";
    this.style.color = "#101010";
    this.style.padding = "5px";

    if (fiftyClicked == true){
        fiftyClicked = false;
        fiftyShadesFreed.style.backgroundColor = "#101010";
        fiftyShadesFreed.style.padding = "0px";
        fiftyShadesFreed.style.color ="white"; 
    }
    if (blackClicked == true){
        blackClicked = false;
        blackPanther.style.backgroundColor = "#101010";
        blackPanther.style.padding = "0px";
        blackPanther.style.color ="white"; 
    }
    if (jumanjiClicked == true){
        jumanjiClicked = false;
        jumanji.style.backgroundColor = "#101010";
        jumanji.style.padding = "0px";
        jumanji.style.color ="white"; 
    }
});
var title4 = document.createElement("p");
title4.innerHTML = "Proud Mary";

var proudMaryPoster = document.createElement("img");
proudMaryPoster.setAttribute("src", "img/proudMary.png");
//proudMaryPoster.setAttribute("class", "poster");
proudMaryPoster.style.width = "100%";

proudMary.appendChild(proudMaryPoster);
proudMary.appendChild(title4);


//Ticket types
var ticket = document.createElement("SELECT");
ticket.innerHTML = "Select Ticket Type";
ticket.addEventListener("change", getTicketQuantity);

var chooseTicket = document.createElement("OPTION");
chooseTicket.innerHTML = "Choose Your Ticket Type";

var ticketRegular = document.createElement("OPTION");
ticketRegular.innerHTML = "Regular";

var ticket3D = document.createElement("OPTION");
ticket3D.innerHTML = "3D";

var ticketIMAX = document.createElement("OPTION");
ticketIMAX.innerHTML = "IMAX 3D";

//Ticket Quantity
var ticketQuantity = document.createElement("INPUT");
ticketQuantity.setAttribute("type", "number");
ticketQuantity.setAttribute("placeholder", "Enter the amount of tickets you want to purchase:");
ticketQuantity.addEventListener("change", choosePreferredSeatType);

//Ticket Show times
var movieTimes = document.createElement("SELECT");
movieTimes.addEventListener("change", selectTicketType);
var time1 = document.createElement("OPTION");
var time2 = document.createElement("OPTION");
var time3 = document.createElement("OPTION");



//Preffered Seat Type
var seat = document.createElement("SELECT");
seat.addEventListener("change", choosePaymentMethod);

var chooseSeatType = document.createElement("OPTION");
chooseSeatType.innerHTML = "Choose Your Seat Type:";

var frontSeat = document.createElement("OPTION");
frontSeat.innerHTML = "Front Seat" ;
var middleSeat = document.createElement("OPTION");
middleSeat.innerHTML = "Middle Seat" ;
var backSeat = document.createElement("OPTION");
backSeat.innerHTML = "Back Seat";

//Payment Method
var payment = document.createElement("SELECT");

var choosePay = document.createElement("OPTION");
choosePay.innerHTML = "How would you like to pay?";

var rsvp = document.createElement("OPTION");
rsvp.innerHTML = "Reserve Seat, Pay on Arrival";
var online = document.createElement("OPTION");
online.innerHTML = "Pay online";


//Functions
function selectLocation(){
    //alert("Done!");
    //var paragraph = document.createElement("p");
    //paragraph.innerHTML = "Select your location";

    //container.appendChild(paragraph);
    getLocation.appendChild(chooseLocation);
    getLocation.appendChild(location1);
    getLocation.appendChild(location2);
    getLocation.appendChild(location3);
    getLocation.appendChild(location4);
    container.appendChild(getLocation);

    //Should probably check to see if the value is changed before I do all of this.
}

function collectAge(){
   // alert("Done!");
    form2.appendChild(getAge);
    container.appendChild(form2);
}

function selectCinema(){
    //var paragraph = document.createElement("p");
    //paragraph.innerHTML = "Choose your cinema";

    //if statement here for the cinemas that would be added based on location
    
    //container.appendChild(paragraph);

    cinema.appendChild(chooseOption);

    if (getLocation.value == "Lagos"){
        cinema.appendChild(silverbird);
        cinema.appendChild(ozone);
        cinema.appendChild(genesis);
        cinema.appendChild(filmhouse);
    }

    else if (getLocation.value == "Ibadan"){
        cinema.appendChild(filmhouse);
        cinema.appendChild(viva);
        cinema.appendChild(ventura);
    }

    else if (getLocation.value == "Abuja"){
        cinema.appendChild(silverbird);
        cinema.appendChild(genesis);
    }

    else if (getLocation.value == "Port Harcourt"){
        cinema.appendChild(filmhouse);
        cinema.appendChild(genesis);
    }

    container.appendChild(cinema);

}

function selectMovie(){
    //Probably about five movies side by side. Probably an Iframe of another HTML document, not sure yet.
    //If statement to select movie based on age.
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Select the movie you want to watch";

    container.appendChild(paragraph);
    movies.appendChild(blackPanther);

    if (getAge.value >= 18){
        movies.appendChild(fiftyShadesFreed);
    }
    movies.appendChild(jumanji);
    movies.appendChild(proudMary);

    container.appendChild(movies);

}

function displayShowTimes(){
    //Display show times in a clean and organised way. Does not have to be radio buttons. Cn just be a div with some css properties for mouseover and stuff
    //If Statement to select showtimes based on movie selected.
    //var paragraph = document.createElement("p");
    //paragraph.innerHTML = "Available show times. Select one.";
    container.appendChild(movieTimes);
    var chooseShowTimes = document.createElement("OPTION");
    chooseShowTimes.innerHTML = "Choose Show Times:";
    movieTimes.appendChild(chooseShowTimes);

    if (cinema.value == "Silverbird Cinemas"){
        if (blackClicked == true){
            time1.innerHTML = "10:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "2:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "6:30 PM";
            movieTimes.appendChild(time3);


        }
        else if (fiftyClicked == true){
            time1.innerHTML = "11:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "12:45 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "2:15 PM";
            movieTimes.appendChild(time3);   
        }

        else if (jumanjiClicked == true){
            time1.innerHTML = "3:30 PM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "6:45 PM";
            movieTimes.appendChild(time2);
        }

        else if (proudClicked ==  true){
            time1.innerHTML = "9:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "11:45 AM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "2:30 PM";
            movieTimes.appendChild(time3); 
        }
    }
}

    if (cinema.value == "Ozone Cinemas"){
        if (blackClicked == true){
            time1.innerHTML = "11:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "3:30 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "5:45 PM";
            movieTimes.appendChild(time3);
        }
        else if (fiftyClicked == true){
            time1.innerHTML = "10:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "6:45 PM";
            movieTimes.appendChild(time2);
        }

        else if (jumanjiClicked == true){
            time1.innerHTML = "2:40 PM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "6:30 PM";
            movieTimes.appendChild(time2);
        }

        else if (proudClicked ==  true){
            time1.innerHTML = "11:45 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "2:30 PM";
            movieTimes.appendChild(time2);
        }
    }
    if (cinema.value == "Genesis Deluxe Cinemas"){
        if (blackClicked == true){
            time1.innerHTML = "10:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "2:30 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "5:30 PM";
            movieTimes.appendChild(time3);
        }
        else if (fiftyClicked == true){
            time1.innerHTML = "1:30 PM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "2:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "6:30 PM";
            movieTimes.appendChild(time3);
        }

        else if (jumanjiClicked == true){
            time1.innerHTML = "10:50 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "1:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "5:30 PM";
            movieTimes.appendChild(time3);
        }

        else if (proudClicked ==  true){
            time2.innerHTML = "2:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "4:30 PM";
            movieTimes.appendChild(time3);
        }
    }
    if (cinema.value == "Filmhouse Cinemas"){
        if (blackClicked == true){
            time1.innerHTML = "11:50 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "3:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "7:30 PM";
            movieTimes.appendChild(time3);
        }
        else if (fiftyClicked == true){
            time1.innerHTML = "1:50 PM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "5:35 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "7:30 PM";
            movieTimes.appendChild(time3);
        }

        else if (jumanjiClicked == true){
            time1.innerHTML = "10:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "2:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "6:30 PM";
            movieTimes.appendChild(time3);
        }

        else if (proudClicked ==  true){
            time1.innerHTML = "11:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "2:40 PM";
            movieTimes.appendChild(time2);
    }
}
    if (cinema.value == "Viva Cinemas"){
        if (blackClicked == true){
            time1.innerHTML = "10:00 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "12:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "4:30 PM";
            movieTimes.appendChild(time3);
        }
        else if (fiftyClicked == true){
            time1.innerHTML = "3:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "5:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "7:30 PM";
            movieTimes.appendChild(time3);
        }

        else if (jumanjiClicked == true){
            time1.innerHTML = "10:50 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "3:30 PM";
            movieTimes.appendChild(time2);
        }

        else if (proudClicked ==  true){
            time1.innerHTML = "10:45 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "2:50 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "5:30 PM";
            movieTimes.appendChild(time3); 
        }

    }
    
    if (cinema.value == "Ventura Cinemas"){
        if (blackClicked == true){
            time1.innerHTML = "12:30 PM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "2:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "5:30 PM";
            movieTimes.appendChild(time3);

        }
        else if (fiftyClicked == true){
            time1.innerHTML = "2:30 PM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "4:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "6:30 PM";
            movieTimes.appendChild(time3);
        }

        else if (jumanjiClicked == true){
            time2.innerHTML = "1:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "6:30 PM";
            movieTimes.appendChild(time3);
        }

        else if (proudClicked ==  true){
            time1.innerHTML = "10:30 AM";
            movieTimes.appendChild(time1);
            time2.innerHTML = "2:40 PM";
            movieTimes.appendChild(time2);
            time3.innerHTML = "5:30 PM";
            movieTimes.appendChild(time3);
        }

    }




function selectTicketType(){
    //Regular, 3D, IMAX 3D

    //var paragraph = document.createElement("p");
    //paragraph.innerHTML = "Select your ticket type";

    //container.appendChild(paragraph);
    ticket.appendChild(chooseTicket);
    ticket.appendChild(ticketRegular);
    ticket.appendChild(ticket3D);
    ticket.appendChild(ticketIMAX);

    container.appendChild(ticket);


}


function getTicketQuantity(){
    //Input field that would collect numbers
    //var paragraph = document.createElement("p");
    //paragraph.innerHTML = "Enter the amount of tickets you'd like to purchase.";

    //container.appendChild(paragraph);
    container.appendChild(ticketQuantity);
}


function choosePreferredSeatType(){
    //Front, Middle, Back

    //var paragraph = document.createElement("p");
    //paragraph.innerHTML = "Where would you like to sit?";

    //container.appendChild(paragraph);
    seat.appendChild(chooseSeatType);
    seat.appendChild(frontSeat);
    seat.appendChild(middleSeat);
    seat.appendChild(backSeat);
    container.appendChild(seat);

}


function choosePaymentMethod(){
    //RSVP (Reserve Seat, pay on arrival)
    //Online

    //var paragraph = document.createElement("p");
    //paragraph.innerHTML = "How would you like to pay?";

    //container.appendChild(paragraph);
    payment.appendChild(choosePay);
    payment.appendChild(rsvp);
    payment.appendChild(online);
    container.appendChild(payment);
}


function printMovieTicket(){
    //Gathers all collected information and prints them in a certain format
}