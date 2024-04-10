package project.entidades;

import javax.persistence.*;

@Entity
@Table(name = "detalle_pedido")
public class DetallePedidoEntidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private PedidoEntidad pedido;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private ProductoEntidad producto;

    @Column(name = "subtotal")
    private double subtotal;

    @Column(name = "total")
    private double total;

    @Column(name = "cantidad")
    private int cantidad;

    // Getters y setters
    //...
}
