
//for generators
var intros=['How Does This Sound:','Ready For It?<br>Your Pet\'s Name is:','How About:','Sorry Your Order Took So Long!<br>Your Pet\'s Name is:','After Much Deliberation,<br>Your Pet\'s Name Is:','A Classic Refreshment is Here!<Your pet\'s name is:','Voila!<br>Your Pet\'s Name is:','Let Me Pour You A Glass!<br>Your Pet\'s Name is:','Brewed to Perfection!<br>Your Pet\'s Name is:',];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}

//Drink Pet Names
var drinkPetNames = ['Mocha','Affogato','Matcha','Tea','Paloma','Mojito','Sprite','Espresso','Latte','Juice','Soda','Juice Box','Snapple','Dr. Pepper','Seltzer','Milkshake','Macchiato','Slushie','Icee','Prosecco','Martini','Pepsi','Root Beer','Mimosa','Chai','Cosmo','Cocoa','Spritz','Bloody Mary','Cortado','Baja Blast','Cider','Daiquiri','Gimlet','Kahlua','Negroni','Margarita','Sazerac','Americano','Mai Tai','Bellini','Merlot','Riesling','Chardonnay','Pinot','Malbec','Tito','Guiness','Brandy','Sherry','Growler','Rosé','Miller','Amber','Ale','Sunkist','7UP','Orangina','Jarrito','Pilsner','Porter','Stout'];

function generateDrinkPetNames(){
    var randomIndex = Math.floor(Math.random() * drinkPetNames.length);
    var randomName = drinkPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}