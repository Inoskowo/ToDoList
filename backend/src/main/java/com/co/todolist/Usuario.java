package com.co.todolist;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // Indica que esta clase es una entidad JPA y se debe mapear a una tabla en la
        // base de datos
public class Usuario {

    @Id // Indica que el siguiente atributo es la clave primaria de la entidad
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Genera automáticamente valores para la clave primaria
    private Long ID; // Atributo para la clave primaria

    private String usuario; // Atributo para el nombre de usuario
    private String email; // Atributo para el correo electrónico
    private String contrasena; // Atributo para la contraseña

    // Getter y Setter para el atributo ID
    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    // Getter y Setter para el atributo usuario
    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    // Getter y Setter para el atributo email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter y Setter para el atributo contraseña
    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
}
