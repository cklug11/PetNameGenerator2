
var intros=['3, 2, 1!','How does this sound:','The moment we\'ve been waiting for<br> Your pet\'s name is:','Ready for it?<br>Your pet\'s name is:','Drum roll please...<br>Your pet\'s name is...','The Universe has spoken.<br>Your pet\'s name henceforth is:','How about:','And the winner is...','The Oscar goes to:','Breaking News Report!<br>Our sources say that your pet\'s name is:','Voila!<br>Your pet\'s name is:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}


//Travel Pet Names
var travelPetNames = ['Paris','Map','Atlas','London','Dallas','Backpack','Pilot','Captain','Bali','Safari','Rio','Explorer','Rome','Cairo','Austin','Helsinki','Peru','Cruise','Cargo','Sailor','Nomad','Compass','Maui','Chicago','Boston','Jet Lag','Geneva','Sydney','Brookyln','Rocket','Jet','Tarmac','Runway','Highway','Turnpike','TollBooth','Ticket','Pothole','Suitcase','Jet Blue','Virginia','Tugboat','Seat Belt','Turnstyle','Subway','Metro','Adelaide','Houston','Arizona','Denver','Malibu','Costa','Georgia','Road','Journey','Trip','Miles','Dublin','Osaka','Reno','Memphis','Tahoe','Bahama','Nile','Danube','Pisa','Scooter','Vespa','Visa','Carolina'];

function generateTravelPetName(){
    var randomIndex = Math.floor(Math.random() * travelPetNames.length);
    var randomName = travelPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}