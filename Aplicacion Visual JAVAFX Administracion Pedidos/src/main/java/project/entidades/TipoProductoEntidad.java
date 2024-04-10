package project.entidades;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tipo_producto")
public class TipoProductoEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "codigo")
    private String codigo;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @OneToMany(mappedBy = "tipoProducto")
    private List<ProductoEntidad> productos;

    // Getters y setters
    //...
}

