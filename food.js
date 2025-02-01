var intros=['3, 2, 1!','How does this sound:','The moment we\'ve been waiting for<br> Your pet\'s name is:','Ready for it?<br>Your pet\'s name is:','Drum roll please...<br>Your pet\'s name is...','The Universe has spoken.<br>Your pet\'s name henceforth is:','How about:','And the winner is...','The Oscar goes to:','Breaking News Report!<br>Our sources say that your pet\'s name is:','Voila!<br>Your pet\'s name is:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}


var foodPetNames = ['Croutons','Cheeto','Garbanzo','Chowder','Cashew','Cheerio','Donut','Egg','Fig','Pumpkin','Cupcake','Cake','Croissant','Brioche','Gumbo','Chili','Raisin','Cookie','Quiche','Dill','Mint','Sushi','Banana','Dumpling','Frito','Gravy','Garlic','Gumdrop','Jello','Kiwi','KitKat','Snickers','Lamb Chop','Beans','Goji','Licorice','Mango','Muffin','Mochi','Oreo','Nugget','Ravoli','Rice','Radish','Shrimp','Sesame','Wasabi','Relish','Mustard','Mayo','Quesadilla','Pinto','Nacho','Sugar','Toast','Wonton','Ziti','Honey','Pesto','Pickle','Hotdog','Aioli','Plum','Peanut','Pepper Jack','Berry','Babybel','Boba','Bagel','Chickpea','Pepper','Popsicle','Pepperoni','Rigatoni','Olive','Ginger','Panini','Pretzel','Hoagie','Polenta','Chia','Crunchwrap','Almond','Pringle','Kumquat','Brie','Cheddar',];

function generateFoodPetName(){
    var randomIndex = Math.floor(Math.random() * foodPetNames.length);
    var randomName = foodPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}