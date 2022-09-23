package com.pratica.api.controllers;

import com.pratica.api.entities.Pedido;
import com.pratica.api.entities.PedidoProduto;
import com.pratica.api.entities.Produto;
import com.pratica.api.services.PedidoProdutoService;
import com.pratica.api.services.ProdutoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/pedido-produtos")
@CrossOrigin("*")
public class PedidoProdutoControler {

    private final PedidoProdutoService pedidoProdutoService;
    private final ProdutoController produtoController;
    private final ProdutoService produtoService;

    public PedidoProdutoControler(PedidoProdutoService pedidoProdutoService, ProdutoController produtoController, ProdutoService produtoService) {
        this.pedidoProdutoService = pedidoProdutoService;
        this.produtoController = produtoController;
        this.produtoService = produtoService;
    }

    //Acessado apenas internamente
    public void save(Pedido pedido, List<Produto> produtos){
        for(Produto produto : produtos){
            PedidoProduto pedidoProduto = new PedidoProduto();

            pedidoProduto.setPedido(pedido);
            Optional<Produto> produtoOptional = this.produtoService.findById(produto.getId());

            produtoOptional.get().setQuantidade(produtoOptional.get().getQuantidade() - produto.getQuantidade());
            this.produtoService.save(produtoOptional.get());

            pedidoProduto.setProduto(produto);
            pedidoProduto.setQuantidade(produto.getQuantidade());
            pedidoProduto.setValor_total(pedidoProduto.getQuantidade() * produto.getPreco());

            this.pedidoProdutoService.save(pedidoProduto);
        }
    }

    @GetMapping
    public ResponseEntity<List<PedidoProduto>> getAll(){ return ResponseEntity.ok(this.pedidoProdutoService.getAll()); }

    @GetMapping("/{pedido}")
    public ResponseEntity<Object> findByPedidoId(@PathVariable(value = "pedido") UUID pedido_id){
        Optional<List<PedidoProduto>> pedidoProdutoOptional = this.pedidoProdutoService.findByPedido(pedido_id);

        if(pedidoProdutoOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pedido não encontado");
        }

        return ResponseEntity.ok(pedidoProdutoOptional.get());
    }
}
