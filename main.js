import TTTModell from "./model/TTTModel.js";
import Palya from "./view/Palya.js";

const LISTA = [" "," "," "," "," "," "," "," "," "];
const taroloElem = $(".tartalom");
let lepes = 0;

const tttModell= new TTTModell();

new Palya(tttModell.getList(), taroloElem)

$(window).on("katt", (event)=>{
    console.log(event.detail)
    /* lepes++;
    if (lepes%2 === 0){
        LISTA[event.detail]="X"
    }else{
        LISTA[event.detail]="O"
    } */
    tttModell.lepteto(event.detail);
    new Palya(tttModell.getList(), taroloElem)
})


//Controller példányosítás
