package org.unifor.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(
    name = "matricula",
    uniqueConstraints = @UniqueConstraint(columnNames = { "aluno_id", "curso_id" })
)
public class Matricula extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @ManyToOne
    public Aluno aluno;

    @ManyToOne
    public Curso curso;
}