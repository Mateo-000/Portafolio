package project.models;

import javafx.beans.InvalidationListener;
import javafx.beans.binding.BooleanExpression;
import javafx.beans.property.DoubleProperty;
import javafx.beans.property.IntegerProperty;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleDoubleProperty;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.beans.property.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Pedido {
    private Integer numeroPedido;
    private List<DetallePedido> detallePedido;
    private Date fechaInicio;
    private Date fechaEstimada;
    private Date fechaFinal;
    private String comprador;
    private EstadoPedido estado;
    private Double total;


    public void setNumeroPedido(Integer numeroPedido) {
        this.numeroPedido = numeroPedido;
    }

    public void setDetallePedido(List<DetallePedido> detallePedido) {
        this.detallePedido = detallePedido;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public void setFechaEstimada(Date fechaEstimada) {
        this.fechaEstimada = fechaEstimada;
    }

    public void setFechaFinal(Date fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public void setComprador(String comprador) {
        this.comprador = comprador;
    }

    public void setEstado(EstadoPedido estado) {
        this.estado = estado;
    }

    public void setTotal(Double total) {
        this.total = calcularTotal();
    }

    public int getNumeroPedido() {
        return numeroPedido;
    }

    public List<DetallePedido> getDetallePedido() {
        return detallePedido;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public Date getFechaEstimada() {
        return fechaEstimada;
    }

    public Date getFechaFinal() {
        return fechaFinal;
    }

    public String getComprador() {
        return comprador;
    }

    public EstadoPedido getEstado() {
        return estado;
    }

    public Double getTotal() {
        return total;
    }

    public List<Producto> getProductos() {

        List<DetallePedido> detallesPedido = this.getDetallePedido();
        List<Producto> productos = new ArrayList<>();

        for (DetallePedido detallePedido :detallesPedido) {

            productos.add(detallePedido.getProducto());
        };

        return productos;

    }


    public Double calcularTotal() {

        double total = 0;

        for (DetallePedido detalle : detallePedido) {

            total += detalle.calcularsubTotal();

        }
        return total;
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "numeroPedido=" + numeroPedido +
                ", detallePedido=" + detallePedido +
                ", fechaInicio=" + fechaInicio +
                ", fechaEstimada=" + fechaEstimada +
                ", fechaFinal=" + fechaFinal +
                ", comprador='" + comprador + '\'' +
                ", estado=" + estado +
                ", total=" + total +
                '}';
    }
}
