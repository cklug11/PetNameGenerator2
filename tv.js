var intros=['How Does This Sound:','Ready For It?<br>Your Pet\'s Name is:','How About:','As Seen On The Small Screen!<br>Your Pet\'s Name is:','Don\'t Change The Channel!<br>Your Pet\'s Name is:','Next Up, A Special Announcement,<br>Your Pet\'s Name is:','Your Pet\'s Name Is:','Sorry About The Commercial Break,<br>Your Pet\'s Name is:','What Do You Think About:','The Big Reveal Is Here!<br>Your Pet\'s Name is:','The Wait Is Over!<br>Your New Pet\'s Name is:', 'Welcome To Your Family:','My Fortune Cookie Says,<br>Your Pet Wants To Be Called:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}

//TV Pet Names
var tvPetNames = ['Ted Lasso','Zuko','Caliou','Deborah Vance','Roy Kent','Eric Cartman','Goku','Pumba','Wall-e','Mater','Batman','Dana Scully','Flash','Lightning McQueen','Timon','Snorlax','Charizard','Eevee','Oscar the Grouch','Bert','Thomas the Tank Engine','Ernie','Fox Mulder','Perry the Platypus','Mr Snuffleupagus','Timmy Turner','Otto Rocket','Eliza Thornberry','Catdog','Pink Panther','Johnny bravo','Sherlock Holmes','Dora the Explorer','Cosmo','Wanda','Chip Skylark','Helga Pataki','Beaker','Gonzo','Miss Piggy','Louise Belcher','Ms.Frizzle','Barney','Jimmy Neutron','Popeye','Yogi Bear','Angelica Pickles','Mojo Jojo','Rosa Diaz','Columbo','Fraiser','Pluto','Charlie Kelly','Frank Reynolds','Sansa Stark','Don Draper','Meredith Grey','Danny Phantom','Lizzie McGuire','Olivia Pope','Jon Snow','London Tipton','Daenerys Targaryen','Appa','Clifford','Wishbone','Momo','Blanche Devereaux','Blue','Magenta','Lassie','Courage','Olivia Benson','Elliot Stabler','John Munch','Dexter','Mr. Rogers','Carrie Bradshaw','Hercules Poirot','Eleven','Buffy the Vampire Slayer','Veronica Mars','Leslie Knope','Selina Meyer','Jonah Ryan','Tobias Funke','Troy Bolton','Sharpey Evans','Lorelai Gilmore','Moira Rose','Blossom','Bubbles','Buttercup','Kermit','Charlie Brown','Chandler Bing','Rachel Greene','Tina blecher','Gaston','Monica Geller','Ross Geller','Elmo','Doogie Howser','Bojack Horseman','Lucille Bluth','Pikachu','Snoopy','Ron Swanson','Dr. House','Omar Little','Walter White','Dwight Schrute','Michael Scott','Fred Flintstone','Jack Bauer','Blair Waldorf'];

function generateTVPetNames(){
    var randomIndex = Math.floor(Math.random() * tvPetNames.length);
    var randomName = tvPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}