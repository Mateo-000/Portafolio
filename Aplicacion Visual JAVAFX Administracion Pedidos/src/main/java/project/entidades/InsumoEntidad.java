package project.entidades;

import javax.persistence.*;

@Entity
@Table(name = "insumo")
public class InsumoEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nombre")
    private String nombre;

}
