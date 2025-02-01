
var intros=['3, 2, 1!','How does this sound:','The moment we\'ve been waiting for<br> Your pet\'s name is:','Ready for it?<br>Your pet\'s name is:','Drum roll please...<br>Your pet\'s name is...','The Universe has spoken.<br>Your pet\'s name henceforth is:','How about:','And the winner is...','The Oscar goes to:','Breaking News Report!<br>Our sources say that your pet\'s name is:','Voila!<br>Your pet\'s name is:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}

//Sports Pet Names
var sportsPetNames = ['Wrigley','Camden','Dodger','Slugger','Shortstop','Puck','Rugby','Steeler','Baton','Titan','Auto','Wimbeldon','Score','Point','FIFA','Pit Stop','Football','Sideline','Caddy','Dash','Sprint','Puck','Derby','Daytona','Indy','Regatta','Cricket','Racket','Belay','Bike','Ping Pong','Paddle','Court','Squash','Goalie','Champion','Dribble','Swish','Dunk','Hoops','Homer','Ace','Birdie','Eagle','Bogey','Silver','Gold','Bronze','Huddle','Pitch','Zamboni','Umpire','Coach','Ref','Rookie','Stretch','Endurance','Speed','Cardio','Burpee','Spike','Superbowl','Stadium','Arena','Olympics','Stadium','Wembley','Marathon'];

function generateSportsPetNames(){
    var randomIndex = Math.floor(Math.random() * sportsPetNames.length);
    var randomName = sportsPetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}