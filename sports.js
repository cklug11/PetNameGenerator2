
var intros=['3, 2, 1!','How Does This Sound:','The Moment We\'ve Been Waiting For<br> Your Pet\'s Name is:','The Draft Pick is in:','Ready for it?<br>Your Pet\'s Name is:','Drum Roll please...<br>Your Pet\'s Name is...','Game, Set, Match!<br>Your Pet\'s Name is:','How About:','And The Winner is...','Your Team\'s Newest Player is:','First Place Goes to:','The MVP(Most Valuable Pet) Has Been Named:','Voila!<br>Your Pet\'s Name is:','The Winning Point Has Been Scored by:','A Slam Dunk of a Name:','The Referee Has Made The Call...<br>Your Pet\'s Name is:','Huddle Up and Meet Your New Teammate:','And The Gold Medal Goes to...',];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}

//Sports Pet Names
var sportsPetNames = ['Wrigley','Camden','Javelin','Pogo Stick','Dodger','Slugger','Shortstop','Puck','Rugby','Steeler','Baton','Titan','Auto','Wimbeldon','Score','Point','FIFA','Pit Stop','Football','Sideline','Caddy','Dash','Sprint','Puck','Derby','Daytona','Locker','Indy','Regatta','Cricket','Racket','Turf','Belay','Bike','Ping Pong','Paddle','Court','Fenway','Squash','Dart','Joust','Knee Pad','Home Run<br>(Homer)','Ace','Birdie','Pom-Pom','Eagle','Bogey','Silver','Gold','Bronze','Huddle','Pitch','Zamboni','Umpire','Bungee','Coach','Ref','Rookie','Stretch','Endurance','Speed','Cardio','Burpee','Spike','Superbowl','Stadium','Arena','Olympics','Stadium','Wembley','Slalom','Marathon'];

function generateSportsPetNames(){
    var randomIndex = Math.floor(Math.random() * sportsPetNames.length);
    var randomName = sportsPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}