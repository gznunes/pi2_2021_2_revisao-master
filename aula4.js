let listaProdutos = [];

function inserir(produto){
    listaProdutos.push(produto);
}

function atualizar(id, produto, preco) {
    for(let prod of listaProdutos){
        if(prod.id == id) {
            prod.nome = produto;
            prod.preco = preco;

            //teste
        }
    }    

}

function deletar(id) {
    listaProdutos.splice(id,1);    
}

function buscarPorId(id) {
    for(let prod of listaProdutos){
        if(prod.id == id) {
            return prod;
        }
    }    
}

function listar(){
    return listaProdutos;
}

let produto = {id:1, nome: "prod1", preco:10};
let produto2 = {id:2, nome: "prod2", preco:10};
let produto3 = {id:3, nome: "prod3", preco:10};
let produto4 = {id:4, nome: "prod4", preco:10};
let produto5 = {id:5, nome: "prod5", preco:10};

inserir(produto);
inserir(produto2);
inserir(produto3);
inserir(produto4);
inserir(produto5);

deletar(3);

atualizar(5,"banana",888);

console.log(buscarPorId(5));

console.log(listaProdutos);



