var intros=['The Newest VIP(Very Important Pet) Is:','The Moment We\'ve Been Waiting for<br>Your Pet\'s Name is:','Drum Roll please...<br>Your Pet\'s Name is...','How About:','And the winner is...','The Oscar Goes to:','And the Name that Stole the Show:','Breaking News Report!<br>Our sources say that your pet\'s name is:','Here Comes the Star of the Show!:','It\'s Time To Meet The One,<br>The Only...','Can We Get A Round Of Applause for:','Future EGOT Winner:','The Paparazzi Can\'t Get Enough of:','Voila!<br>Your Pet\'s Name is:','In Their Debut Role:','Excited To Present your Pet\'s Name:','Lights, Camera, Action!<br>Your pet\'s name is:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}

var celebrityPetNames = ['Hepburn','Robert Pattinson','Kristin Stewart','Bill Hader','Will Ferrell','Jean Smart','Andy Samberg','Keanu','DeVito','Selena','Demi','Pacino','Einstein','Britney','Darwin','Galileo','Jane Goodall','Elton','Heath','Rihanna','Prince','Cher','Bono','Lennon','Ringo','Liam Neeson','Messi','LeBron','Beckham','Adele','Madonna','Meryl','Serena','Venus','Elvis','Marley','Ariana','Sandler','Leonardo','Sting','Lincoln','Kennedy','Roosevelt','Taylor Swift','Beyonce','Minnelli','Denzel','Clooney','Hanks','Jagger','Halsey','Eminem','Socrates','Aristotle','Gaga','Drake','Kenderick','Diana','Caesar','Chappell Roan','Betsy Ross','Cleopatra','Charli','Hoda','Sinatra','Marvin','Springsteen','Bieber','Joni','Mozart','Orwell','Shakespeare','Kafka','Hemingway','Walt Whitman','Bill Nye','Picasso','Leonardo da Vinci','Matisse','Banksy','Dali','Pollock','Amelia Earhart','Michelangelo','Warhol','Degas','Stevie','Steve Irwin','Greta Thunberg','Dolly Parton','Shakira','Beethoven','Buddy Holly','Aretha','Janis','Bowie','Nelson','Poe','Hitchcock','Kubrick','Brando','Spielberg'];

function generateCelebrityPetName(){
    var randomIndex = Math.floor(Math.random() * celebrityPetNames.length);
    var randomName = celebrityPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}