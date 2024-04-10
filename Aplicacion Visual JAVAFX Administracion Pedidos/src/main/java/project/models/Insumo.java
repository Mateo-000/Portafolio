package project.models;

public class Insumo {
    private String nombre;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Insumo{" +
                "nombre='" + nombre + '\'' +
                '}';
    }
}
