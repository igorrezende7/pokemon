interface DadosProps{
    valor:number;
    name:string;
    image:string
}

export default class Dados{
    dados:DadosProps;

    constructor(){
        this.dados = {valor : 0, name:"", image:""}
    }
    
}

