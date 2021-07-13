export class Produto {
    id: string ;
    nome: string;
    valor: string;
    promocao: boolean;
    valorPromo: string;
    imagem: string;


constructor(id : string, nome : string, valor : string, promocao : boolean,
     valorPromo: string, imagem: string){
         this.id = id;
         this.nome = nome;
         this.valor = valor;
         this.promocao = promocao;
         this.valorPromo = valorPromo;
         this.imagem = imagem;
     }
}