var intros=['3, 2, 1!','How does this sound:','The moment we\'ve been waiting for<br> Your pet\'s name is:','Ready for it?<br>Your pet\'s name is:','Drum roll please...<br>Your pet\'s name is...','The Universe has spoken.<br>Your pet\'s name henceforth is:','How about:','And the winner is...','The Oscar goes to:','Breaking News Report!<br>Our sources say that your pet\'s name is:','Voila!<br>Your pet\'s name is:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}

var celebrityPetNames = ['Hepburn','Keanu','DeVito','Selena','Demi','Pacino','Einstein','Britney','Darwin','Galileo','Goodall','Elton','Heath','Rihanna','Prince','Cher','Bono','Lennon','Ringo','Messi','LeBron','Beckham','Adele','Madonna','Meryl','Serena','Venus','Elvis','Marley','Ariana','Sandler','Leonardo','Sting','Lincoln','Kennedy','Roosevelt','Taylor','Beyonce','Minnelli','Denzel','Clooney','Hanks','Jagger','Halsey','Eminem','Socrates','Aristotle','Gaga','Drake','Kenderick','Diana','Caesar',' Betsy Ross','Cleopatra','Charli','Hoda','Sinatra','Marvin','Springsteen','Bieber','Joni','Mozart','Orwell','Shakespeare','Kafka','Hemingway','Walt Whitman','Picasso','da Vinci','Matisse','Banksy','Dali','Pollock','Michelangelo','Warhol','Degas','Stevie','Steve Irwin','Dolly','Shakira','Beethoven','Buddy','Aretha','Janis','Bowie','Nelson','Hitchcock','Kubrick','Brando','Spielberg'];

function generateCelebrityPetName(){
    var randomIndex = Math.floor(Math.random() * celebrityPetNames.length);
    var randomName = celebrityPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}