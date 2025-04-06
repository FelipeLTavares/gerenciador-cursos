package org.unifor.controllers;

import jakarta.annotation.security.PermitAll;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.unifor.entities.Usuario;
import org.unifor.services.AutenticacaoService;

import java.util.Map;

@Path("/auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AutenticacaoController {

    @Inject
    AutenticacaoService autenticacaoService;

    @PermitAll
    @POST
    @Path("/login")
    public Response login(Usuario usuario) {
        return autenticacaoService.login(usuario)
                .map(token -> Response.ok(Map.of("token", token)).build())
                .orElse(Response.status(Response.Status.UNAUTHORIZED).build());
    }
}
