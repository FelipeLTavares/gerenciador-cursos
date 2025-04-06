package org.unifor.repositories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import org.unifor.entities.Aluno;

import java.util.List;

@ApplicationScoped
@Transactional
public class AlunoRepository implements PanacheRepository<Aluno> {
    public List<Aluno> findAlunosNaoMatriculadosNoCurso(Long cursoId) {
        return getEntityManager()
            .createQuery("""
                SELECT a FROM Aluno a
                WHERE NOT EXISTS (
                    SELECT m FROM Matricula m
                    WHERE m.aluno = a AND m.curso.id = :cursoId
                )
            """, Aluno.class)
            .setParameter("cursoId", cursoId)
            .getResultList();
    }
}
