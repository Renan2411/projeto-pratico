import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/user/register',
    name: 'register',
    component: () => import('../components/forms/registrar-usuario/UserRegister.vue')
  },
  {
    path: '/user/list',
    name: 'list',
    component: () => import('../views/UsersView.vue')
  },
  {
    path: '/pedido/register',
    name: 'pedido',
    component: () => import('../components/forms/PedidoRegister.vue')
  },
  {
    path: "/pedido/list",
    name: 'pedidoList',
    component: () => import('../views/PedidosView.vue')
  },
  {
    path: "/produto/register",
    name: 'produto',
    component: () => import('../components/forms/ProdutoRegister.vue')
  },
  {
    path: "/produto/list",
    name: 'produtoList',
    component: () => import('../views/ProdutoView.vue')
  },
  {
    path: "/compras/home",
    name: 'compras',
    component: () => import('../components/compras/ProdutosList.vue')
  },
  {
    path: '/compras/carrinho',
    name: 'comprasCarrinho',
    component: () => import('../components/compras/CarrinhoProdutos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
