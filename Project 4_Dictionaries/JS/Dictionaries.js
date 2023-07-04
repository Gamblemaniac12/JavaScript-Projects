function my_Dictionaries() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete(Animal.Sound);
    document.getElementById("Dictionaries").innerHTML = Animal.Sound;
    
};

