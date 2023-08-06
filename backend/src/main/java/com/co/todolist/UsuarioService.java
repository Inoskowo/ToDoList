package com.co.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario registrarNuevoUsuario(Usuario usuario) throws RegistroException {
        // Validar campos obligatorios
        if (usuario.getUsuario() == null || usuario.getEmail() == null || usuario.getContrasena() == null) {
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
        try {
            System.out.println("Guardando usuario en la base de datos: " + usuario.getUsuario());

            Usuario nuevoUsuario = usuarioRepository.save(usuario);

            System.out.println("Usuario guardado exitosamente: " + nuevoUsuario.getUsuario());
            return nuevoUsuario;
        } catch (Exception e) {
            System.out.println("Error al guardar el usuario en la base de datos: " + e.getMessage());
            throw new RegistroException("Ha ocurrido un error al registrar el usuario.");
        }
    }

    public Usuario autenticarUsuario(Usuario usuario) throws AutenticacionException {
        // Buscar el usuario por nombre de usuario en la base de datos
        Optional<Usuario> usuarioEncontrado = usuarioRepository.findByUsuario(usuario.getUsuario());

        // Verificar si el usuario existe y si la contraseña coincide
        if (usuarioEncontrado.isPresent() && usuarioEncontrado.get().getContrasena().equals(usuario.getContrasena())) {
            return usuarioEncontrado.get(); // Autenticación exitosa
        } else {
            throw new AutenticacionException("Nombre de usuario o contraseña incorrectos.");
        }
    }
}
