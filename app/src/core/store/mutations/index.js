import mutationsCarrinho from "./mutations-carrinho";
import mutationsProdutos from "./mutations-produtos";
import mutationsClientes from "./mutations-clientes";
import mutationsPedidos from "./mutations-pedidos";

export default{
    ...mutationsCarrinho,
    ...mutationsProdutos,
    ...mutationsClientes,
    ...mutationsPedidos
}