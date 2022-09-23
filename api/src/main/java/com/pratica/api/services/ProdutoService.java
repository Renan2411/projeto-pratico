package com.pratica.api.services;

import com.pratica.api.entities.Produto;
import com.pratica.api.repository.ProdutoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProdutoService {
    private final ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    @Transactional
    public Produto save(Produto produto){ return this.produtoRepository.save(produto); }

    public List<Produto> findAll() { return this.produtoRepository.findAll(); }

    public Optional<Produto> findById(UUID id) { return this.produtoRepository.findById(id); }

    public void delete(Produto produto) {  this.produtoRepository.delete(produto);}
}
