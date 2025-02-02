
var intros=['Your Pet\'s Passport Reads:','The Passport Is Stamped!<br>Your Pet\'s Name Is:','How Does This sound:','Your Pet\'s Name is:','Ready For It?<br>Your Pet\'s Name is:','Buckle Up!<br>Your Pet\'s name is:','A Round-Trip Ticket for:','The Newest Passenger Princess:','The Compass Points to Your Pet\'s Name:','How About:','All Roads Lead to:','Better Start Packing Your Suitcase!<br>Your Pet\'S Name Is:','The Map Led to Your Pet\'s Name:','Embark On Your Journey With:','Your Travel Companion for Life is:','Last Boarding Call For:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}


//Travel Pet Names
var travelPetNames = ['Paris','Map','Atlas','London','Dallas','Backpack','Pilot','Captain','Bali','Safari','Rio','Explorer','Rome','Cairo','Austin','Oslo','Helsinki','Peru','Cruise','Cargo','Sailor','Roadkill','Zanzibar','Nomad','Compass','Maui','Chicago','Boston','Jet Lag','Geneva','Sydney','Brookyln','Rocket','Tahiti','Amalfi','Jet','Tarmac','Runway','Highway','Turnpike','TollBooth','Ticket','Pothole','Suitcase','Jet Blue','Virginia','Tugboat','Seat Belt','Turnstyle','Subway','Caboose','Roam','Trolley','Metro','Adelaide','Houston','Arizona','Fiji','Sedona','Salem','Patagonia','Denver','Malibu','Costa','Chicago','Georgia','Road','Journey','Trip','Miles','Dublin','Osaka','Reno','Memphis','Tahoe','Bahama','Nile','Danube','Pisa','Scooter','Vespa','Visa','Carolina','Bronx',''];

function generateTravelPetName(){
    var randomIndex = Math.floor(Math.random() * travelPetNames.length);
    var randomName = travelPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}