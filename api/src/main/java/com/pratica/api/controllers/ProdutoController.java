package com.pratica.api.controllers;

import com.pratica.api.entities.Produto;
import com.pratica.api.services.ProdutoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produto")
@CrossOrigin("*")
public class ProdutoController {

    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody Produto produto){
        produto.setPreco( (float) produto.getPreco());
        produto.setQuantidade((int) produto.getQuantidade());

        return ResponseEntity.ok(this.produtoService.save(produto));
    }

    @GetMapping
    public ResponseEntity<List<Produto>> getAll(){ return ResponseEntity.ok(this.produtoService.findAll()); }

    @PutMapping
    public ResponseEntity<Object> update(@RequestBody Produto produto){
        Optional<Produto> produtoOptional = this.produtoService.findById(produto.getId());

        if(produtoOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontado");
        }

        this.produtoService.save(produto);

        return ResponseEntity.ok(produto);
    }
    @DeleteMapping
    public ResponseEntity<Object> delete(@RequestBody Produto produto){
        Optional<Produto> produtoOptional = this.produtoService.findById(produto.getId());

        if(produtoOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto Não encontrado");
        }

        this.produtoService.delete(produto);

        return ResponseEntity.status(HttpStatus.OK).body("Produto Deletado com Sucesso");
    }
}
