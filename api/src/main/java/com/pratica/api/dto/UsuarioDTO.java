package com.pratica.api.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class UsuarioDTO {
    @NotBlank(message = "O nome é Obrigatório")
    private String nome;

    @Size(min = 11, max = 11, message = "O telefone deve conter o DDD")
    private String telefone;

    @Email(message = "O email é obrigatório")
    @NotBlank(message = "O email é obrigatório")
    private String email;

    @NotBlank(message = "O endereço é obrigatório")
    private String endereco;

    @NotBlank(message = "A senha é obrigatória")
    @Min(value = 8, message = "A senha deve conter no mínimo 8 caracteres")
    private String senha;
}
