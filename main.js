// impostuojam pagrinde klasė is js27_oop.js kartu su funkcijomis
import U, {ShowName,ShowSurname,greeings} from "./js27_oop.js";
// tik exportuojamos funkcijos iš
import  {default as my} from "./items.js";
// sukuriamas objektas
const vartotojas = new U("Tomas","Tom");
// rezultatas atvaizduojamas konsolėja
console.log(vartotojas);
ShowName(vartotojas);
ShowSurname(vartotojas);
greeings();
my();

