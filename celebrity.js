var intros=['The Newest VIP(Very Important Pet) Is:','The Moment We\'ve Been Waiting for<br>Your Pet\'s Name is:','Drum Roll please...<br>Your Pet\'s Name is...','How About:','And the winner is...','The Oscar Goes to:','And the Name that Stole the Show:','Breaking News Report!<br>Our sources say that your pet\'s name is:','Here Comes the Star of the Show!:','It\'s Time To Meet The One,<br>The Only...','Can We Get A Round Of Applause for:','Future EGOT Winner:','The Paparazzi Can\'t Get Enough of:','Voila!<br>Your Pet\'s Name is:','In Their Debut Role:','Excited To Present your Pet\'s Name:','Lights, Camera, Action!<br>Your pet\'s name is:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}

var celebrityPetNames = ['Hepburn','Keanu','DeVito','Selena','Demi','Pacino','Einstein','Britney','Darwin','Galileo','Goodall','Elton','Heath','Rihanna','Prince','Cher','Bono','Lennon','Ringo','Messi','LeBron','Beckham','Adele','Madonna','Meryl','Serena','Venus','Elvis','Marley','Ariana','Sandler','Leonardo','Sting','Lincoln','Kennedy','Roosevelt','Taylor','Beyonce','Minnelli','Denzel','Clooney','Hanks','Jagger','Halsey','Eminem','Socrates','Aristotle','Gaga','Drake','Kenderick','Diana','Caesar','Betsy Ross','Cleopatra','Charli','Hoda','Sinatra','Marvin','Springsteen','Bieber','Joni','Mozart','Orwell','Shakespeare','Kafka','Hemingway','Walt Whitman','Picasso','da Vinci','Matisse','Banksy','Dali','Pollock','Michelangelo','Warhol','Degas','Stevie','Steve Irwin','Dolly','Shakira','Beethoven','Buddy','Aretha','Janis','Bowie','Nelson','Poe','Hitchcock','Kubrick','Brando','Spielberg'];

function generateCelebrityPetName(){
    var randomIndex = Math.floor(Math.random() * celebrityPetNames.length);
    var randomName = celebrityPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}