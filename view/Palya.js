import Mezo from "./Mezo.js";

export default class Palya{
    #lista = [];
    #szuloElem;

   constructor(lista, szuloElem){
       this.#lista = lista;
       this.#szuloElem = szuloElem;
       this.#szuloElem.empty();
       this.palyaKiir();
   }

   palyaKiir(){
    this.#lista.forEach((elem, index)=>{
        //console.log(elem)
        new Mezo(elem, index, this.#szuloElem)
    })
   }
}
// akt állapotot megjeleniti
