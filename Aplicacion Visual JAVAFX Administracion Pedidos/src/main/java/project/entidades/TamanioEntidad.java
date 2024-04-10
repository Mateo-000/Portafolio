package project.entidades;

import javax.persistence.*;

@Entity
@Table(name = "tamanio")
public class TamanioEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cantidad")
    private double cantidad;

    @Column(name = "unidad_medida")
    private String unidadMedida;

    // Constructor, getters y setters
    //...
}
