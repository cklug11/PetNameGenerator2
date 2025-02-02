var intros=['How Does This Sound:','May We Suggest:','The Universe Has Spoken.<br>Your Pet\'s Name Henceforth is:','How about:','The Earth Has Chosen:','A Seashell Said Your New Pet\'s Name is:','Introducing:','Mother Nature Suggests The Name:','Welcome To The Family:','The Forest has Whispered Its Secret...<br>Your Pet\'s Name is:', 'The Message in a Bottle says:<br>Your Pet\'s Name is:','It\'s Written in the Stars!<br>Your Pet\'s Name is:','The Newest Addition To The Herd is:']

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}
//Nature Pet Names
var naturePetNames = ['Rosie','Birdy','Sprout','Cloud','Cricket','Cobweb','Minnow','Moose','Bear','Pinecone','Toad','Fern','Oak','Maple','Poppy','Twiggy','Olive','Tulip','Clover','Skye','Leaf','Ivy','Willow','Dandelion','Barnacle','Ginkgo','Kelp','River','Cactus','Ant','Stone','Dew','Gale','Shadow','Storm','Moon','Sun(Sunny)','Snow','Birch','Bamboo','Dirt','Worm','Puddle','Meadow','Fossil','Orchid','Bayou','Reef','Marlin','Gale','Tuna','Breeze','Pollen','Clay','Crater','Rain','Snow','Mushroom','Cyclone','Barracuda','Azalea','Primrose','Magnolia','Ivy','Brook','Jade','Ivory','Topaz','Moth','Wren','Boabob','Flint','Bramble','Blaze','Desert','Pine','Autumn','Daisy','Quicksand','Dune','Cave','Marina','Solstice','Misty','Coral','Blossom','Petunia','Comet','Star','Lake','Cloud','Rainbow','Night','Dawn','Sunrise','Flower','Guppy','Tadpole','Lava','Ember','Fungi','Rain','Forest','Lilac','Snail','Goose','Pearl','Emerald','Wood','Riptide','Sand','Bug','Chestnut','Pebble','Granite','Ruby','Diamond','Opal','Marble','Violet','Moss','Spruce','Elm','Ash','Acorn'];

function generateNaturePetName(){
    var randomIndex = Math.floor(Math.random() * naturePetNames.length);
    var randomName = naturePetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}