var petNames = ['Rosie','Poppy','Noodles','Olive', 'Frannie'];

function generatePetName(){
    var randomIndex = Math.floor(Math.random() * petNames.length);
    var randomName = petNames[randomIndex];
    document.getElementById("random-name").textContent= ("Welcome " + randomName);
}
