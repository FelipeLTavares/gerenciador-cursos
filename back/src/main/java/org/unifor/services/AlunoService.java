package org.unifor.services;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.unifor.entities.Aluno;
import org.unifor.repositories.AlunoRepository;

import java.util.List;

@ApplicationScoped
public class AlunoService {
    @Inject
    AlunoRepository alunoRepository;

    public void cadastrar(Aluno aluno) { alunoRepository.persist(aluno); }

    public List<Aluno> buscar() {
        return alunoRepository.listAll();
    }

    public boolean apagar(Long id) {
        return alunoRepository.deleteById(id);
    }
}