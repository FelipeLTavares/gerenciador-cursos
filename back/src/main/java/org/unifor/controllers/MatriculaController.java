package org.unifor.controllers;

import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.unifor.entities.Matricula;
import org.unifor.services.MatriculaService;

import java.util.List;

@Path("/matriculas")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@RolesAllowed("admin")
public class MatriculaController {
    @Inject
    MatriculaService matriculaService;

    @POST
    public Response matricular(Matricula matricula) {
        matriculaService.matricular(matricula);
        return Response.ok(matricula).status(201).build();
    }

    @GET
    @Path("/curso/{cursoId}")
    public List<org.unifor.dtos.AlunoMatriculadoDto> listarPorCurso(@PathParam("cursoId") Long cursoId) {
        return matriculaService.listarPorCurso(cursoId);
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        boolean apagado = matriculaService.apagar(id);
        return apagado ? Response.noContent().build() : Response.status(404).build();
    }
}