var intros=['3, 2, 1!','How does this sound:','The moment we\'ve been waiting for<br> Your pet\'s name is:','Ready for it?<br>Your pet\'s name is:','Drum roll please...<br>Your pet\'s name is...','The Universe has spoken.<br>Your pet\'s name henceforth is:','How about:','And the winner is...','The Oscar goes to:','Breaking News Report!<br>Our sources say that your pet\'s name is:','Voila! Your pet\'s name is:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}

//Nature Pet Names
var naturePetNames = ['Rosie','Birdy','Sprout','Cloud','Cricket','Cobweb','Minnow','Moose','Bear','Pinecone','Toad','Fern','Oak','Maple','Poppy','Twiggy','Olive','Tulip','Clover','Skye','Leaf','Ivy','Willow','Dandelion','Barnacle','Ginkgo','Kelp','River','Cactus','Ant','Stone','Dew','Gale','Shadow','Storm','Moon','Sun(Sunny)','Snow','Birch','Bamboo','Dirt','Worm','Puddle','Meadow','Orchid','Bayou','Reef','Marlin','Gale','Blaze','Solstice','Misty','Coral','Blossom','Petunia','Comet','Star','Lake','Cloud','Rainbow','Night','Dawn','Sunrise','Flower','Guppy','Tadpole','Lava','Ember','Fungi','Rain','Forest','Lilac','Snail','Goose','Pearl','Emerald','Wood','Riptide','Sand','Bug','Chestnut','Pebble','Granite','Ruby','Diamond','Opal','Marble','Violet','Moss','Spruce','Elm','Ash','Acorn'];

function generateNaturePetName(){
    var randomIndex = Math.floor(Math.random() * naturePetNames.length);
    var randomName = naturePetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}
//Food Pet Names
var foodPetNames = ['Croutons','Cheeto','Garbanzo','Chowder','Cashew','Cheerio','Donut','Egg','Fig','Pumpkin','Cupcake','Cake','Croissant','Brioche','Gumbo','Chili','Raisin','Cookie','Quiche','Dill','Mint','Sushi','Banana','Dumpling','Frito','Gravy','Garlic','Gumdrop','Jello','Juice','Kiwi','KitKat','Snickers','Lamb Chop','Licorice','Mango','Muffin','Mochi','Oreo','Nugget','Ravoli','Rice','Radish','Shrimp','Sesame','Wasabi','Relish','Mustard','Mayo','Quesadilla','Pinto','Nacho','Sugar','Toast','Wonton','Ziti','Coffee','Honey','Pesto','Pickle','Hotdog','Aioli','Plum','Peanut','Pepper Jack','Berry','Babybel','Boba','Bagel','Chickpea','Pepper','Popsicle','Pepperoni','Rigatoni','Olive','Ginger','Panini','Pretzel','Hoagie','Polenta'];

function generateFoodPetName(){
    var randomIndex = Math.floor(Math.random() * foodPetNames.length);
    var randomName = foodPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}

//Celebrity Pet Names
var celebrityPetNames = ['Hepburn','Keanu','DeVito','Selena','Demi','Pacino','Einstein','Britney','Darwin','Galileo','Goodall','Elton','Heath','Rihanna','Prince','Cher','Bono','Lennon','Ringo','Messi','LeBron','Beckham','Adele','Madonna','Meryl','Serena','Venus','Elvis','Marley','Ariana','Sandler','Leonardo','Sting','Lincoln','Kennedy','Roosevelt','Taylor','Beyonce','Minnelli','Denzel','Clooney','Hanks',' Betsy Ross','Cleopatra','Charli','Hoda','Sinatra','Marvin','Springsteen','Bieber','Joni','Mozart','Orwell','Shakespeare','Kafka','Hemingway','Walt Whitman','Picasso','da Vinci','Matisse','Banksy','Dali','Pollock','Michelangelo','Warhol','Degas','Stevie','Steve Irwin','Dolly','Shakira','Beethoven','Buddy','Aretha','Janis','Bowie','Nelson','Hitchcock','Kubrick','Brando','Spielberg'];

function generateCelebrityPetName(){
    var randomIndex = Math.floor(Math.random() * celebrityPetNames.length);
    var randomName = celebrityPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}

//Travel Pet Names
var travelPetNames = ['Paris','Map','Atlas','London','Dallas','Backpack','Pilot','Captain','Bali','Safari','Rio','Explorer','Nomad','Compass','Maui','Chicago','Boston','Jet Lag','Geneva','Sydney','Brookyln','Rocket','Jet','Tarmac','Runway','Highway','Turnpike','TollBooth','Ticket','Pothole','Suitcase','Jet Blue','Virginia','Tugboat','Seat Belt','Turnstyle','Subway','Metro','Adelaide','Houston','Arizona','Denver','Malibu','Costa','Georgia','Road','Journey','Trip','Miles','Dublin','Osaka','Reno','Memphis','Tahoe','Bahama','Nile','Danube','Pisa','Scooter','Vespa','Visa','Carolina'];

function generateTravelPetName(){
    var randomIndex = Math.floor(Math.random() * travelPetNames.length);
    var randomName = travelPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}

//Sports Pet Names
var sportsPetNames = ['Wrigley','Camden','Dodger','Slugger','Shortstop','Puck','Rugby','Steeler','Titan','Auto','Wimbeldon','Score','Point','FIFA','Pit Stop','Football','Sideline','Caddy','Dash','Sprint','Puck','Derby','Daytona','Indy','Regatta','Cricket','Racket','Belay','Bike','Ping Pong','Paddle','Court','Stretch','Endurance','Speed','Cardio','Burpee','Spike','Superbowl','Stadium','Arena','Olympics','Stadium','Wembley','Marathon'];

function generateSportsPetNames(){
    var randomIndex = Math.floor(Math.random() * sportsPetNames.length);
    var randomName = sportsPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}