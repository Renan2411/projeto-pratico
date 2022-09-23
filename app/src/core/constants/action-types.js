export default {
    COMUM: {
        REGISTAR_NOVO: {
            PRODUTO: 'registrarNovoProduto',
            CLIENTE: 'registrarNovoCliente',
            PEDIDO: 'registrarNovoPedido',
        },
        BUSCAR: {
            PRODUTO_POR_ID: 'buscarProdutoPorId',
            CLIENTE_POR_ID: 'buscarClientePorId',
            PRODUTOS_POR_PEDIDO_ID: 'buscarProdutosPorPedidoId',
            PRODUTOS: 'buscarProdutos',
            CLIENTES: 'buscarClientes',
            PEDIDOS: 'buscarPedidos',
        },
        EDITAR: {
            CLIENTE: 'editarCliente',
            PEDIDO: 'editarPedido',
            PRODUTO: 'editatProduto',
        },
    },
    PEDIDO: {
        BUSCAR_LISTAGEM_PEDIDO: 'buscarListagemPedido',
        CRIAR_PEDIDO: 'criarPedido',
        EDITAR_PEDIDO: 'editarPedido',
        EXCLUIR_PEDIDO: 'excluirPedido',
    },
    PEDIDO_PRODUTO: {
        BUSCAR_LISTAGEM_PEDIDO_PRODUTO: 'bucarListagemPedidoProduto',
        BUSCAR_PEDIDO_PRODUTO_POR_PEDIDO_ID: 'buscarPedidoProdutoPorPedidoID',
        CRIAR_PEDIDO_PRODUTO: 'criarPedidoProduto',
    },
    PRODUTO: {
        BUSCAR_LISTAGEM_PRODUTO: 'buscarListagemProduto',
        CRIAR_PRODUTO: 'criarProduto',
        EDITAR_PRODUTO: 'editarProduto',
        EXCLUIR: 'excluirProduto',
    },
    USUARIO: {
        BUSCAR_LISTAGEM_USUARIO: 'buscarListagemUsuario',
        BUSCAR_USUARIO_POR_EMAIL: 'buscarUsuarioPorEmail',
        CRIAR_USUARIO: 'criarUsuario',
        EDITAR_USUARIO: 'editarUsuario',
        EXCLUIR_USUARIO: 'excluirUsuario',
    },
}
