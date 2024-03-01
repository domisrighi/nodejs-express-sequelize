const dataSource = require('../models');

class Services{
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros(){
        return dataSource[this.model].findAll();
    }

    async atualizaRegistro(dadosAtualizados, id){
        const ListaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
            where: { id: id} //o primeiro parâmetro eh referente a tabela, o segundo que vem do json
        });
        if (ListaDeRegistrosAtualizados[0] === 0){
            return false;
        }
        return true;
    }
}

module.exports = Services;

//Criar uma classe de serviços que pode se conectar com qualquer modelo