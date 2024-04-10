package project.entidades;

import javax.persistence.*;

@Entity
@Table(name = "descuento")
public class DescuentoEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "porcentaje")
    private double porcentaje;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "poc", length = 1)
    private String poc; // P o O

    @ManyToOne
    @JoinColumn(name = "pedido_id") // Nombre de la columna en la tabla DescuentoEntidad que hace referencia al PedidoEntidad
    private PedidoEntidad pedido;

    // Constructor, getters y setters
    //...
}


