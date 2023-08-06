package com.co.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuarios") // Ruta base para todas las solicitudes relacionadas con usuarios
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registro") // Endpoint para el registro de usuarios
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
        try {
            System.out.println("Solicitud recibida para registrar usuario: " + usuario.getUsuario());

            Usuario nuevoUsuario = usuarioService.registrarNuevoUsuario(usuario);
            System.out.println("Nuevo usuario registrado: " + nuevoUsuario.getUsuario());

            return new ResponseEntity<>(nuevoUsuario, HttpStatus.CREATED);
        } catch (RegistroException e) {
            System.out.println("Error al registrar usuario: " + e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login") // Nuevo endpoint para el inicio de sesión
    public ResponseEntity<?> iniciarSesion(@RequestBody Usuario usuario) {
        try {
            System.out.println("Solicitud de inicio de sesión recibida para el usuario: " + usuario.getUsuario());

            Usuario usuarioAutenticado = usuarioService.autenticarUsuario(usuario);

            if (usuarioAutenticado != null) {
                System.out.println("Usuario autenticado: " + usuarioAutenticado.getUsuario());
                return new ResponseEntity<>(usuarioAutenticado, HttpStatus.OK);
            } else {
                System.out.println("Error de autenticación para el usuario: " + usuario.getUsuario());
                return new ResponseEntity<>("Credenciales incorrectas", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            System.out.println("Error durante el inicio de sesión: " + e.getMessage());
            return new ResponseEntity<>("Error durante el inicio de sesión", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Puedes agregar más endpoints para manejar otras operaciones relacionadas con
    // usuarios si es necesario
}
