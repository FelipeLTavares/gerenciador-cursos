package org.unifor.services;

import io.smallrye.jwt.build.Jwt;
import jakarta.enterprise.context.ApplicationScoped;
import org.unifor.entities.Usuario;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Optional;

@ApplicationScoped
public class AutenticacaoService {
    public Optional<String> login(Usuario usuario) {
        if (authenticate(usuario)) {
            String token = Jwt.issuer("https://seu-dominio.com/issuer")
                    .upn(usuario.getUsuario())
                    .groups(new HashSet<>(Arrays.asList("user", "admin")))
                    .sign();
            return Optional.of(token);
        }
        return Optional.empty();
    }

    private boolean authenticate(Usuario usuario) {
        return "usuario".equals(usuario.getUsuario()) && "senha".equals(usuario.getSenha());
    }
}
