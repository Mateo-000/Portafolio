package project.entidades;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "producto")
public class ProductoEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nombre")
    private String nombre;

    @Column(name = "codigo")
    private String codigo;


    @Column(name = "precio")
    private double precio;

    @ManyToOne
    @JoinColumn(name = "tamanio_id")
    private TamanioEntidad tamanio;

    @ManyToOne
    @JoinColumn(name = "tipo_producto_id")
    private TipoProductoEntidad tipoProducto;

    @OneToMany(mappedBy = "producto")
    private List<InsumoXProductoEntidad> insumos;

    // Getters y setters
    //...
}
