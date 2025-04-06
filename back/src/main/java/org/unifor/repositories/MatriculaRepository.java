package org.unifor.repositories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import org.unifor.entities.Matricula;

@ApplicationScoped
@Transactional
public class MatriculaRepository implements PanacheRepository<Matricula> {}