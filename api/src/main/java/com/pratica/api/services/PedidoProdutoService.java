package com.pratica.api.services;

import com.pratica.api.entities.PedidoProduto;
import com.pratica.api.repository.PedidoProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PedidoProdutoService {

    private final PedidoProdutoRepository pedidoProdutoRepository;

    public PedidoProdutoService(PedidoProdutoRepository pedidoProdutoRepository) {
        this.pedidoProdutoRepository = pedidoProdutoRepository;
    }

    public PedidoProduto save(PedidoProduto pedidoProduto){ return this.pedidoProdutoRepository.save(pedidoProduto); }

    public List<PedidoProduto> getAll(){ return this.pedidoProdutoRepository.findAll(); }

    public Optional<List<PedidoProduto>> findByPedido(UUID pedido_id){ return this.pedidoProdutoRepository.findByPedidoId(pedido_id); }
}
