package org.unifor.entities;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class Usuario {
    @NotBlank(message = "O usuário é obrigatório")
    private String usuario;
    @NotBlank(message = "A senha é obrigatória")
    private String senha;
}
