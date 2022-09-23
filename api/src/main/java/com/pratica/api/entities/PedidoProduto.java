package com.pratica.api.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "tb_pedidd_produto")
@Data
public class PedidoProduto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;

    @ManyToOne
    private Pedido pedido;

    @ManyToOne
    private Produto produto;

    @Column(nullable = false)
    private float valor_total;

    @Column(nullable = false)
    private int quantidade;
}
