package project.entidades;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
@Entity
@Table(name = "pedido")
public class PedidoEntidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "pedido")
    private List<DetallePedidoEntidad> detalles;

    @OneToMany(mappedBy = "pedido")
    private List<DescuentoEntidad> descuentos;

    @Column(name = "numero_pedido")
    private String numeroPedido;

    @Column(name= "total_pedido")
    private Double total;

    @Column(name = "fecha_inicio")
    private Date fechaInicio;

    @Column(name = "fecha_estimada")
    private Date fechaEstimada;

    @Column(name = "fecha_final")
    private Date fechaFinal;

    @Column(name = "comprador")
    private String comprador;

    @ManyToOne
    @JoinColumn(name = "estado_id")
    private EstadoPedidoEntidad estado;

    // Getters y setters
}

