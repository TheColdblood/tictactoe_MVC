export default class Mezo{
    #jel;
    #index;
    #szuloElem;

    constructor(jel, index, szuloElem){
        this.#jel = jel;
        this.#index = index;
        this.#szuloElem = szuloElem;
        this.mezoKiir();
        this.kattintasElem = $(".card:last-child");
        if (this.#jel === " "){
            this.kattintasEsemeny();
        }
    }

    mezoKiir(){
        this.#szuloElem.append(`
        <div class="card col-lg-4">
            <p class="card-text">${this.#jel}</p>
        </div>
        `)

    }

    kattintasEsemeny(){
        this.kattintasElem.on("click", ()=>{
            console.log(this)
            const esem = new CustomEvent ("katt", {detail: this.#index})
            window.dispatchEvent(esem);
        })
    }
}

