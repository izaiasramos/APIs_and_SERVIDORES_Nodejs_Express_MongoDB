// Importa a função `conectarAoBanco` do arquivo `dbConfig.js`
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados MongoDB usando a string de conexão fornecida pela variável de ambiente `STRING_CONEXAO`
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Define uma função assíncrona chamada `getTodosPosts`
export default async function getTodosPosts(){
    // Obtém o banco de dados chamado "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");

    // Obtém a coleção de posts dentro do banco de dados
    const colecao = db.collection("posts");

    // Busca todos os documentos da coleção "posts" e retorna um array com os resultados
    return colecao.find().toArray();
}