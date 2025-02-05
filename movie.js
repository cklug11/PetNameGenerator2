var intros=['How Does This Sound:','Ready For It?<br>Your Pet\'s Name is:','How About:','Sorry About Those Movie Trailers,<br>Your Pet\'s Name is:','What Do You Think About:','The Big Reveal Is Here!<br>Your Pet\'s Name is:','The Wait Is Over!<br>Your New Pet\'s Name is:','As Seen On The Big Screen!<br>Your Pet\'s Name is:','Without Further Ado,<br>Let Me Introduce Your Pet:','My Fortune Cookie Says,<br>Your Pet Wants To Be Called:','According To My Crystal Ball,<br>Your Pet Wants To Be Called:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}

//Movie Pet Names
var moviePetNames = ['Enda Mode','Thor','Crookshanks','Loki','Marmaduke','Binx','Hedwig','Stitch','Garfield','Toto','Captain Jack Sparrow','Spock','Boba Fett','Jar Jar Binks','Elle Woods','Miranda Priestly','Mike Wazowski','Olaf','Grinch','Scooby-Doo','Shaggy','Jabba the Hut','Zelda','Tiana','Princess Fiona','Voldemort','Forrest Gump','Mowgli','Coraline','Nemo','Jacob Black','Galinda the Good Witch','Elphaba','Mufasa','Dory','Mario','Luigi','Toad','Princess Peach','Bowser','Yoshi','E.T.','Hagrid','Hercules','Ursula','Juno','Peeta','Snape','Eeyore','Gromit','Tarzan','Edward Cullen','Bella Swan','Lilo','Woody','Rocky Balboa','Zorro','Grinch','Hulk','Bambi','Bilbo Baggins','Katniss Everdeen','Shrek','Cinderella','Willy Wonka','Wednesday Addams','Indiana Jones','Marty McFly','Gandalf','Gollum','Luke Skywalker','Darth Vader','Anakin Skywalker','Princess Leia','Groot','Obi-Wan Kenobi','Simba','Piglet','Grogu','Han Solo','Yoda','Moana','Elsa','Buzz Lightyear','Tinkerbell','Chewbacca','Dobby','Hermione','Draco','Dumbledore','Baloo','Tarzan','Dobby'];

function generateMoviePetNames(){
    var randomIndex = Math.floor(Math.random() * moviePetNames.length);
    var randomName = moviePetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}