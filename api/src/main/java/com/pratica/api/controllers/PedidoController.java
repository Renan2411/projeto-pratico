package com.pratica.api.controllers;

import com.pratica.api.dto.PedidoProdutoDTO;
import com.pratica.api.entities.Pedido;
import com.pratica.api.entities.PedidoProduto;
import com.pratica.api.entities.Produto;
import com.pratica.api.services.PedidoService;
import com.pratica.api.services.ProdutoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pedido")
@CrossOrigin("*")
public class PedidoController {

    private final PedidoService pedidoService;
    private final PedidoProdutoControler pedidoProdutoControler;

    public PedidoController(PedidoService pedidoService, ProdutoService produtoService, ProdutoController produtoController, PedidoProdutoControler pedidoProdutoControler) {
        this.pedidoService = pedidoService;
        this.pedidoProdutoControler = pedidoProdutoControler;
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody PedidoProdutoDTO pedidoProdutoDTO){

        Pedido novoPedido = this.pedidoService.save(pedidoProdutoDTO.getPedido());

        this.pedidoProdutoControler.save(novoPedido, pedidoProdutoDTO.getProdutos());

        return ResponseEntity.ok(novoPedido);
    }

    @GetMapping
    public ResponseEntity<List<Pedido>> getAllPedidos(){
        return ResponseEntity.ok(this.pedidoService.findAll());
    }

    @DeleteMapping
    public  ResponseEntity delete(@RequestBody Pedido pedido){
        if(!this.pedidoService.existsById(pedido.getId())){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pedido não encontrado");
        }

        this.pedidoService.delete(pedido.getId());

        return ResponseEntity.ok("Pedido Deletado com sucesso");
    }

    @PutMapping
    public ResponseEntity<Object> update(@RequestBody Pedido pedido){
        if(!this.pedidoService.existsById(pedido.getId())){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pedido não encontrado");
        }

        Optional<Pedido> pedidoOptional = this.pedidoService.findById(pedido.getId());

        pedido.setId(pedidoOptional.get().getId());

        this.pedidoService.save(pedido);

        return ResponseEntity.ok("Pedido editado com sucesso");
    }
}
