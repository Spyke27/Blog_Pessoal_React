import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com/' /* conexão com o backend */
});

/*  */
export const login = async (url: any, dados: any, setDado: any) =>{
    const resposta = await api.post(url, dados);
    setDado(resposta.data.token); /* recuperando os dados da resposta e pegando o token */

}



















/* Rodrigo Daniel */