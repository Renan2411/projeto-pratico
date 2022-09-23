import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import actions from '@/core/store/actions/index'
import mutations from '@/core/store/mutations/index'


Vue.use(Vuex)

export default new Vuex.Store({ actions, mutations })

// export default new Vuex.Store({
//   state: {
//     urlUsers: "http://localhost:8080/pessoa",
//     urlPedidos: "http://localhost:8080/pedido",
//     urlProdutos: "http://localhost:8080/produto",
//     urlPedidoProdutos: "http://localhost:8080/pedido-produtos",
//     drawer: true,
//     pessoa: {},
//     pessoasCadastradas: [],
//     pedidosCadastrados: [],
//     produtosCadastrados: [],
//     produtosPorPedido: [],
//     produtosCarrinho: []
//   },
//   getters: {
//     getProdutos(state) {
//       return state.produtosPorPedido;
//     },
//     getCarrinho(state) {
//       return state.produtosCarrinho;
//     }
//   },
//   mutations: {
//     changeDrawer(state) {
//       state.drawer = !state.drawer
//     },

//     mountProdutosByPedido(state, pedidos) {
//       state.produtosPorPedido = [];

//       pedidos.forEach(element => {
//         element.produto.quantidade = element.quantidade
//         state.produtosPorPedido.push(element.produto);
//       });
//     },

//     mountPessoas(state, pessoas) {
//       state.pessoasCadastradas = pessoas;
//     },

//     atualizarArrayPessoas(state, pessoa) {
//       state.pessoasCadastradas.push(pessoa);
//     },

//     mountPedidos(state, pedidos) {
//       state.pedidosCadastrados = pedidos;
//     },

//     atualizarArrayPedidos(state, pedido) {
//       state.pedidosCadastrados.push(pedido);
//     },

//     mountProdutos(state, produtos) {
//       state.produtosCadastrados = produtos;
//     },

//     atualizarArrayProdutos(state, produto) {

//       (Array.isArray(produto)) ?
//         (state.produtosCadastrados.map((element) => {
//           produto.map((item) => {
//             (element.id === item.id) &&
//               (element.quantidade = (element.quantidade - item.quantidade));
//           })
//         })) : state.produtosCadastrados.push(produto);

//     },

//     zerarProdutosCarrinho(state) {
//       state.produtosCarrinho = []
//     },

//     adicionarProdutoCarrinho(state, item) {
//       let obj = Object.assign({}, item);

//       let add = true;
//       let quantidade = 1;

//       state.produtosCarrinho.map((element) => {
//         if (element.id === obj.id) {
//           element.quantidade++;
//           add = false
//         }
//       });

//       if (add) {
//         obj.quantidade = quantidade;
//         state.produtosCarrinho.push(obj);
//       }
//     },

//     removerProdutoCarrinho(state, item) {

//       let removerElemento = false;

//       console.log(item);
//       console.log(state.produtosCarrinho);

//       state.produtosCarrinho.map((element) => {
//         if (element.id === item.id) {

//           element.quantidade--;

//           (element.quantidade === 0) && (removerElemento = true)
//         }
//       });

//       (removerElemento) && (state.produtosCarrinho =
//         state.produtosCarrinho.filter(
//           (element) => { if (element.id !== item.id) return element }
//         ));

//     }

//   },
//   actions: {
//     async registerPedido(context, pedido) {
//       let response = await axios.post(context.state.urlPedidos, pedido);

//       context.commit('atualizarArrayPedidos', response.data);
//       context.commit('atualizarArrayProdutos', pedido.produtos);
//     },

//     async alterarPedido(context, pedido) {
//       await axios.put(context.state.urlPedidos, pedido);
//     },

//     async getAllPedidos(context) {
//       let response = await axios.get(this.state.urlPedidos);

//       context.commit('mountPedidos', response.data);
//     },

//     async getProdutosByPedido(context, pedido) {
//       let response = await axios.get(`${context.state.urlPedidoProdutos}/${pedido.id}`);

//       context.commit('mountProdutosByPedido', response.data)
//     },

//     async registerPerson(context, pessoa) {
//       let response = await axios.post(context.state.urlUsers, pessoa);

//       context.commit('atualizarArrayPessoas', response.data);
//     },

//     async getAllPessoas(context) {
//       let response = await axios.get(context.state.urlUsers);

//       context.commit('mountPessoas', response.data)
//     },

//     async getAllProdutos(context) {
//       let response = await axios.get(context.state.urlProdutos);

//       context.commit('mountProdutos', response.data);
//     },

//     async registerProduto(context, produto) {
//       let response = await axios.post(context.state.urlProdutos, produto);

//       context.commit('atualizarArrayProdutos', response.data);
//     }
//   },
//   modules: {
//   }
// })
