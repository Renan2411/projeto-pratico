package com.pratica.api.services;

import com.pratica.api.data.DetalheUsuarioData;
import com.pratica.api.entities.Usuario;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DetalheUsuarioServiceImpl implements UserDetailsService {

    private final UsuarioService usuarioService;

    public DetalheUsuarioServiceImpl(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuario = this.usuarioService.findByEmail(username);

        if(usuario.isEmpty()){
            throw new UsernameNotFoundException("Usuário [" + username +"] não encontrado");
        }

        return new DetalheUsuarioData(usuario);
    }
}
