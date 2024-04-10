package project.models;

import java.util.List;

public class DetallePedido {
    private Producto producto;
    private int cantidad;
    private double precioUnitario;
    private double subotal;
    private double total;

    public double calcularsubTotal(){
        double subtotal = precioUnitario * cantidad;

        return subtotal;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public double getPrecioUnitario() {
        return precioUnitario;
    }

    public void setPrecioUnitario() {
        this.precioUnitario = this.getProducto().getPrecio();
    }

    public double getSubotal() {
        return subotal;
    }

    public void setSubotal(double subotal) {
        this.subotal = subotal;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal() {
        this.total = this.getProducto().getPrecio() * this.getCantidad();
    }

    @Override
    public String toString() {
        return "DetallePedido{" +
                "producto=" + producto +
                ", cantidad=" + cantidad +
                ", precioUnitario=" + precioUnitario +
                ", subotal=" + subotal +
                ", total=" + total +
                '}';
    }
}

