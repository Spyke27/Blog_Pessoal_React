import axios from "axios";

export const api = axios.create({
    baseURL: 'https://blogpessoalnest.onrender.com/' /* conexão com o backend */
});

/*  */
export const login = async (url: any, dados: any, setDado: any) =>{
    const resposta = await api.post(url, dados);
    
    setDado(resposta.data.token); /* recuperando os dados da resposta e pegando o token */

}
/*  */
export const cadastroUsuario = async (url: any, dados: any, setDado: any) =>{
    const resposta = await api.post(url, dados);
    setDado(resposta.data); /* recuperando os dados da resposta completa */
}

export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data);
}


















/* Rodrigo Daniel */