package com.pratica.api.dto;

import com.pratica.api.entities.Pedido;
import com.pratica.api.entities.Produto;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class PedidoProdutoDTO {

    private Pedido pedido;
    private List<Produto> produtos;

}
