package com.pratica.api.controllers;

import com.pratica.api.dto.UsuarioDTO;
import com.pratica.api.entities.Usuario;
import com.pratica.api.services.UsuarioService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/pessoa")
@CrossOrigin("*")
public class UsuarioControler {
    private final UsuarioService usuarioService;
    private final PasswordEncoder encoder;

    public UsuarioControler(UsuarioService usuarioService, PasswordEncoder encoder) {
        this.usuarioService = usuarioService;
        this.encoder = encoder;
    }

    @PostMapping
    public ResponseEntity<Object> save(@RequestBody @Valid UsuarioDTO usuarioDTO){
        System.out.println(usuarioDTO);
        usuarioDTO.setSenha(encoder.encode(usuarioDTO.getSenha()));

        Usuario newUsuario = new Usuario();

        BeanUtils.copyProperties(usuarioDTO, newUsuario);

        return ResponseEntity.ok(this.usuarioService.save(newUsuario));
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> getAllPessoas(){ return ResponseEntity.ok(this.usuarioService.findAll()); }

    @GetMapping("/{email}")
    public ResponseEntity<Object> getPessoaByEmail(@PathVariable("email") String email){
        Optional<Usuario> usuarioOptional = this.usuarioService.findByEmail(email);

        if(usuarioOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontado");
        }

        return ResponseEntity.ok(usuarioOptional.get());
    }

    @DeleteMapping
    public ResponseEntity delete(@RequestBody Usuario usuario){
        UUID id = usuario.getId();

        try {
            this.usuarioService.delete(id);

            return ResponseEntity.ok("Usuario deletado com sucesso");

        } catch (Exception e) {
            String message = "Não foi possível deletar o usuário [" + usuario.getNome() +"]";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(message);
        }

    }

    @PutMapping
    public ResponseEntity<Object> update(@RequestBody Usuario usuario){
        Optional<Usuario> usuarioOptional = this.usuarioService.findById(usuario.getId());

        if(!usuarioOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possível encontrar o usuário");
        }
        usuario.setId(usuarioOptional.get().getId());
        usuario.setSenha(usuarioOptional.get().getSenha());

        this.usuarioService.save(usuario);

        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/validar")
    public ResponseEntity<Boolean> validarSenha(@RequestParam(value = "login") String email,
                                                @RequestParam(value = "senha") String senha){
        Optional<Usuario> usuarioOptional = this.usuarioService.findByEmail(email);
//        System.out.println(usuarioOptional.get());
        if(usuarioOptional.isEmpty()) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);

        boolean valid = encoder.matches(senha, usuarioOptional.get().getSenha());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;

        return ResponseEntity.status(status).body(valid);
    }
}
