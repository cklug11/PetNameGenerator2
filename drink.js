
//for generators
var intros=['3, 2, 1!','How does this sound:','The moment we\'ve been waiting for<br> Your pet\'s name is:','Ready for it?<br>Your pet\'s name is:','Drum roll please...<br>Your pet\'s name is...','The Universe has spoken.<br>Your pet\'s name henceforth is:','How about:','And the winner is...','The Oscar goes to:','Breaking News Report!<br>Our sources say that your pet\'s name is:','Voila!<br>Your pet\'s name is:'];

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