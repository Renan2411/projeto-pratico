package com.pratica.api.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "TB_PEDIDO")
@Data
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false, length = 100)
    private String descricao;

    @Column
    private float valor_final;

    @ManyToOne
    private Usuario usuario;

//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "pedido_produtos",
//            joinColumns = @JoinColumn(name = "pedido_fk"),
//            inverseJoinColumns = @JoinColumn(name = "produto_fk"))
//    private List<Produto> produtos = new ArrayList<>();


}
