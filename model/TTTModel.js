export default class TTTModell{
    #LISTA = [" "," "," "," "," "," "," "," "," "];
    #lepes
    #aktElem

    constructor(){
        this.#lepes=0
        this.setAktElem()
    }

    setAktElem(){
        if(this.#lepes % 2 === 0){
            this.#aktElem = "X"
        }else{
            this.#aktElem = "0"
        }
    }

    getList(){
        return this.#aktElem
    }

    lepteto(index){
        this.#LISTA[index] = this.#aktElem
        this.#lepes++
        this.setAktElem()
    }

    getLepes(){
        return 
    }

    //ellenőrzés()


}

//előállítja az akt. állapotot

