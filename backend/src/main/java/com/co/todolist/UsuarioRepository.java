package com.co.todolist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsByUsuario(String usuario);

    boolean existsByEmail(String email);
    // Aquí puedes agregar métodos personalizados para consultas específicas si lo
    // necesitas
}