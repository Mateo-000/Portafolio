package project.models;

import java.util.List;
public class Producto {
    private String codigo;

    private Tamanio tamanio;

    private String nombre;

    private List<InsumoXproducto> insumos;

    private double precio;

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Tamanio getTamanio() {
        return tamanio;
    }

    public void setTamanio(Tamanio tamanio) {
        this.tamanio = tamanio;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<InsumoXproducto> getInsumos() {
        return insumos;
    }

    public void setInsumos(List<InsumoXproducto> insumos) {
        this.insumos = insumos;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
}
