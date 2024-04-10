package project.entidades;
import javax.persistence.*;

@Entity
@Table(name = "insumo_x_producto")
public class InsumoXProductoEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "insumo_id")
    private InsumoEntidad insumo;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private ProductoEntidad producto;

    @Column(name = "cantidad")
    private int cantidad;

    // Getters y setters
    //...
}
