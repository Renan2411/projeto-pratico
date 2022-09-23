package com.pratica.api.services;

import com.pratica.api.entities.Pedido;
import com.pratica.api.repository.PedidoRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;

    public PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    @Transactional
    public Pedido save(Pedido pedido){ return this.pedidoRepository.save(pedido); }

    public List<Pedido> findAll(){ return this.pedidoRepository.findAll(); }

    @Transactional
    public void delete(UUID id){ this.pedidoRepository.deleteById(id); }

    public Optional<Pedido> findById(UUID id){ return this.pedidoRepository.findById(id); }

    public boolean existsById(UUID id){ return this.pedidoRepository.existsById(id); }
}
