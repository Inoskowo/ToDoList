package com.co.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario registrarNuevoUsuario(Usuario usuario) throws RegistroException {
        // Validar campos obligatorios
        if (usuario.getUsuario() == null || usuario.getEmail() == null || usuario.getContraseña() == null) {
            throw new RegistroException("Todos los campos son obligatorios.");
        }

        // Verificar unicidad de nombre de usuario y correo electrónico
        if (usuarioRepository.existsByUsuario(usuario.getUsuario())) {
            throw new RegistroException("El nombre de usuario ya está en uso.");
        }
        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new RegistroException("El correo electrónico ya está registrado.");
        }

        // Guardar el usuario en la base de datos
        return usuarioRepository.save(usuario);
    }
}
