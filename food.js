var intros=['How Does This Sound:','Ready For It?<br>Your Pet\'s Name is:','The Newest Addition to the Menu!<br>Your Pet\'s Name is:','Order up!<br>Your Pet\'s Name is:','How About:','Fresh Out The Oven is:','The Chef\'s Special is:','Voila!<br>Your Pet\'s Name is:','The Daily Special is Served:','Hot Off The Grill!:', 'It\'s On The House,<br>Your Pet\'s Name is:','Cooked to Perfection!<br>Your Pet\'s Name is:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}


var foodPetNames = ['Croutons','Cilantro','Quinoa','Chive','Baguette','Cheeto','Fondue','Garbanzo','Zucchini','Pistachio','Chowder','Cashew','Cheerio','Sprinkles','Tahini','Linguini','Macaroni','Donut','Ketchup','Horseradish','Salsa','Chimchurri','Carbonara','Egg','Fig','Pumpkin','Cupcake','Cake','Croissant','Brioche','Okra','Gumbo','Chili','Raisin','Cookie','Quiche','Dill','Mint','Sushi','Masala','Banana','Dumpling','Frito','Caper','Tarter','Alfredo','Marinara','Gravy','Garlic','Gumdrop','Jello','Kiwi','KitKat','Snickers','Lamb Chop','Beans','Goji','Licorice','Spork','Kebab','Mango','Muffin','Mochi','Oreo','Nugget','Ravoli','Rice','Radish','Shrimp','Sesame','Wasabi','Relish','Mustard','Mayo','Quesadilla','Pinto','Nacho','Sugar','Toast','Wonton','Ziti','Honey','Pesto','Pickle','Hotdog','Aioli','Plum','Peanut','Pepper Jack','Berry','Angus','Honeydew','Arugula','Babybel','Boba','Bagel','Chickpea','Tortilla','Pepper','Popsicle','Pepperoni','Rigatoni','Olive','Ginger','Panini','Pretzel','Hoagie','Polenta','Chia','Crunchwrap','Almond','Pringle','Kumquat','Brie','Cheddar',];

function generateFoodPetName(){
    var randomIndex = Math.floor(Math.random() * foodPetNames.length);
    var randomName = foodPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}