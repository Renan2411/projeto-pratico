import actionsClientes from "./actions-clientes";
import actionsPedidos from "./actions-pedidos";
import actionsProdutos from "./actions-produtos";

export default{
    ...actionsClientes,
    ...actionsPedidos,
    ...actionsProdutos
}