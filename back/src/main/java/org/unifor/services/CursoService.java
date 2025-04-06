package org.unifor.services;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.unifor.entities.Curso;
import org.unifor.repositories.CursoRepository;

import java.util.List;

@ApplicationScoped
public class CursoService {
    @Inject
    CursoRepository cursoRepository;

    public void cadastrar(Curso curso) {
        cursoRepository.persist(curso);
    }

    public List<Curso> buscar() {
        return cursoRepository.listAll();
    }

    public boolean apagar(Long id) {
        return cursoRepository.deleteById(id);
    }
}