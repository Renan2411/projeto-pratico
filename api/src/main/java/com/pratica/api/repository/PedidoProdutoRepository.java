package com.pratica.api.repository;

import com.pratica.api.entities.PedidoProduto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PedidoProdutoRepository extends JpaRepository<PedidoProduto, UUID> {

    public Optional<List<PedidoProduto>> findByPedidoId(UUID pedido_id);

}
