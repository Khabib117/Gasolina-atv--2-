
import { DataTypes } from "sequelize";

import mysql from "./mysql.js";



const Cliente = mysql.define('Cliente', {

    nome: DataTypes.STRING,

    cpf: DataTypes.STRING,

    email: DataTypes.STRING,

    telefone: DataTypes.STRING

});

const Venda = mysql.define('Venda', {

    valTotVenda: DataTypes.FLOAT,

    DatVenda: DataTypes.DATEONLY

});

const Funcionario = mysql.define('Funcionario', {

    Nome: DataTypes.STRING,

    cpf: DataTypes.STRING,

    email: DataTypes.STRING,

    telefone: DataTypes.STRING

});

const Produto = mysql.define('Produto', {

    Descricao: DataTypes.STRING,

    CnpFor: DataTypes.STRING,

    ValUnit: DataTypes.FLOAT,

    quantidade: DataTypes.FLOAT

});

const itemvenda = mysql.define('itemvenda', {

    Quantidade: DataTypes.FLOAT,

    SubTotal: DataTypes.FLOAT

});


const Fornecedor = mysql.define('Fornecedor', {

    RazSoc: DataTypes.STRING,

    CnpFor: DataTypes.STRING,

    email: DataTypes.STRING,

    telefone: DataTypes.STRING


});

Cliente.hasMany(Venda);
Venda.belongsTo(Cliente);

Funcionario.hasMany(Venda);
Venda.belongsTo(Funcionario);

Venda.belongsToMany(Produto, {through: itemvenda});
Produto.belongsToMany(Venda, {through: itemvenda});

Produto.belongsTo(Fornecedor);
Fornecedor.hasMany(Produto);

mysql.sync();

export{Cliente, Venda, itemvenda, Funcionario, Produto, Fornecedor, mysql};