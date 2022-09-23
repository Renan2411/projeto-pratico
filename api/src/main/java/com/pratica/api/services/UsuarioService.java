package com.pratica.api.services;

import com.pratica.api.entities.Usuario;
import com.pratica.api.repository.UsuarioRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UsuarioService {
    final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario save(Usuario usuario){ return this.usuarioRepository.save(usuario); }

    public List<Usuario> findAll() {
        return this.usuarioRepository.findAll();
    }

    public void delete(UUID id) throws Exception {
        try {
            this.usuarioRepository.deleteById(id);
        }catch (DataIntegrityViolationException e){
            throw new DataIntegrityViolationException("Não foi possível deletar o usuário",e);
        }
    }

    public Optional<Usuario> findByEmail(String email) { return this.usuarioRepository.findByEmail(email); }

    public Optional<Usuario> findById(UUID id) { return this.usuarioRepository.findById(id); }

}
