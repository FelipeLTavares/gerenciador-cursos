package org.unifor.services;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.unifor.dtos.AlunoMatriculadoDto;
import org.unifor.entities.Matricula;
import org.unifor.repositories.MatriculaRepository;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class MatriculaService {
    @Inject
    MatriculaRepository matriculaRepository;

    public void matricular(Matricula matricula) {
        matriculaRepository.persist(matricula);
    }

    public List<AlunoMatriculadoDto> listarPorCurso(Long cursoId) {
        List<Matricula> matriculas = Matricula.list("curso.id", cursoId);

        return matriculas.stream()
                .map(m -> new AlunoMatriculadoDto(m.getAluno(), m.id))
                .collect(Collectors.toList());
    }

    public boolean apagar(Long id) {
        return matriculaRepository.deleteById(id);
    }
}