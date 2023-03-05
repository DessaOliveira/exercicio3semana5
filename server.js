function addNames(...nomes) {

const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
const novaLista = lista.slice();

    for (let name of nomes){

        if (typeof name !== 'string'){
             return console.log('Erro: Todos os nomes devem ser strings!!!');
             
        }if (lista.includes(name)) {
              return console.log(`Erro: ${name} já existe!!!`)
              
        }if (!novaLista.includes(...name)) {
            novaLista.push(`${nomes},` + lista);
     
}

  return console.log(novaLista);
}}
    addNames('Laura', 'Marta', 'Lucas', 'Mateus');
    addNames(8);
    addNames('Vitoria'); 