var petNames = ['Rosie','Poppy','Twiggy','Olive', 'Ginkgo'];

function generatePetName(){
    var randomIndex = Math.floor(Math.random() * petNames.length);
    var randomName = petNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}