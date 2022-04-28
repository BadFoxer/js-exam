// kalse kuria eksportuojam į main.js
export default class User{
    constructor(vardas,pavarde){
        this.vardas =vardas;
        this.pavarde= pavarde;
    }
}
// vartotojo vardas  eksportuojam į main.js
export function ShowName(user){
    console.log(`Vartotojo vardas: ${user.vardas}`);
}
// vartotojo pavardė eksportuojam į main.js
export function ShowSurname(user){
    console.log(`Vartotojo pavardė: ${user.pavarde}`);
}
 
export function greeings(){
    console.log("labas vakaras")
}

