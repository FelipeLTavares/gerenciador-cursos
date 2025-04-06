package org.unifor.controllers;

import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.unifor.entities.Curso;
import org.unifor.services.CursoService;

import java.util.List;

@Path("/cursos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@RolesAllowed("admin")
public class CursoController {
    @Inject
    CursoService cursoService;

    @POST
    public Response create(Curso curso) {
        cursoService.cadastrar(curso);
        return Response.ok(curso).status(201).build();
    }

    @GET
    public List<Curso> list() {
        return cursoService.buscar();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        boolean deleted = cursoService.apagar(id);
        return deleted ? Response.noContent().build() : Response.status(404).build();
    }
}