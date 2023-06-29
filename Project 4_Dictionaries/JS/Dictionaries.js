function my_Dictionaries() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionaries").innerHTML = Animal.Sound;
};

console.log("After removal: ");
delete(my_Dictionaries.Sound);