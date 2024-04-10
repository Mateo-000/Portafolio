package project.entidades;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "estado_pedido")
public class EstadoPedidoEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "fecha_inicio")
    private LocalDate fechaInicio;

    @Column(name = "fecha_fin")
    private LocalDate fechaFin;

    public Long getId() {
        return id;
    }
// Getters y setters
}

