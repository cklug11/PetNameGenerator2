var intros=['3, 2, 1!','How does this sound:','The moment we\'ve been waiting for<br> Your pet\'s name is:','Ready for it?<br>Your pet\'s name is:','Drum roll please...<br>Your pet\'s name is...','The Universe has spoken.<br>Your pet\'s name henceforth is:','How about:','And the winner is...','The Oscar goes to:','Breaking News Report!<br>Our sources say that your pet\'s name is:','Voila!<br>Your pet\'s name is:'];

function generateIntro(){
    var randomIntroIndex = Math.floor(Math.random() * intros.length);
    var randomIntro = intros[randomIntroIndex];
    document.getElementById("intro").innerHTML=(randomIntro);
}
//Nature Pet Names
var naturePetNames = ['Rosie','Birdy','Sprout','Cloud','Cricket','Cobweb','Minnow','Moose','Bear','Pinecone','Toad','Fern','Oak','Maple','Poppy','Twiggy','Olive','Tulip','Clover','Skye','Leaf','Ivy','Willow','Dandelion','Barnacle','Ginkgo','Kelp','River','Cactus','Ant','Stone','Dew','Gale','Shadow','Storm','Moon','Sun(Sunny)','Snow','Birch','Bamboo','Dirt','Worm','Puddle','Meadow','Orchid','Bayou','Reef','Marlin','Gale','Tuna','Breeze','Pollen','Clay','Crater','Rain','Snow','Mushroom','Cyclone','Barracuda','Azalea','Primrose','Magnolia','Ivy','Brook','Jade','Ivory','Topaz','Moth','Wren','Boabob','Flint','Bramble','Blaze','Desert','Pine','Autumn','Daisy','Quicksand','Dune','Cave','Marina','Solstice','Misty','Coral','Blossom','Petunia','Comet','Star','Lake','Cloud','Rainbow','Night','Dawn','Sunrise','Flower','Guppy','Tadpole','Lava','Ember','Fungi','Rain','Forest','Lilac','Snail','Goose','Pearl','Emerald','Wood','Riptide','Sand','Bug','Chestnut','Pebble','Granite','Ruby','Diamond','Opal','Marble','Violet','Moss','Spruce','Elm','Ash','Acorn'];

function generateNaturePetName(){
    var randomIndex = Math.floor(Math.random() * naturePetNames.length);
    var randomName = naturePetNames[randomIndex];

    document.getElementById("button").style.display="none";
    document.getElementById("random-name").innerHTML= (randomName + "!");
    document.getElementById("another-name").style.display="block";
}