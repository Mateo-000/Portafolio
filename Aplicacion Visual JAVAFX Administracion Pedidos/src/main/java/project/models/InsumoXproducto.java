package project.models;

public class InsumoXproducto {
    private Insumo insumo;
    private double cantidad;

    public Insumo getInsumo() {
        return insumo;
    }

    public void setInsumo(Insumo insumo) {
        this.insumo = insumo;
    }

    public double getCantidad() {
        return cantidad;
    }

    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }

    @Override
    public String toString() {
        return "InsumoXproducto{" +
                "insumo=" + insumo +
                ", cantidad=" + cantidad +
                '}';
    }
}
