package org.unifor.controllers;

import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.unifor.entities.Aluno;
import org.unifor.services.AlunoService;

import java.util.List;

@Path("/alunos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@RolesAllowed("admin")
public class AlunoController {
    @Inject
    AlunoService alunoService;

    @POST
    public Response cadastrar(Aluno aluno) {
        alunoService.cadastrar(aluno);
        return Response.ok(aluno).status(201).build();
    }

    @GET
    public List<Aluno> list() {
        return alunoService.buscar();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        boolean deleted = alunoService.apagar(id);
        return deleted ? Response.noContent().build() : Response.status(404).build();
    }
}