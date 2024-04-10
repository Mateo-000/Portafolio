package project;

import static project.DAO.InsumoDAO.obtenerInsumoPorId;
import static project.DAO.InsumoXproductoDAO.buscarInsumosPorIdProducto;
import static project.DAO.ProductoDAO.obtenerProductoPorId;
import static project.DAO.PedidoDAO.obtenerTodosLosPedidos;
import static project.DAO.DetallePedidoDAO.obtenerDetallesPedidoPorIdPedido;
import static project.DAO.EstadoDAO.obtenerEstadoPorId;

import project.DAO.DetallePedidoDAO;
import project.models.*;


import java.util.ArrayList;
import java.util.List;

public class TestMain {

    public static void main(String[] args) {
        //testearInsumo();
        //testearInsumoXproducto();
        //testearProducto();
        //testearPedido();
        //testearDetallePedido();
        testearEstado();
    }

    public static void testearInsumo() {
        Insumo insumo;
        insumo = obtenerInsumoPorId(1);
        System.out.println(insumo);
    }

    public static void testearInsumoXproducto() {
        List<InsumoXproducto> insumosXproducto;
        insumosXproducto = buscarInsumosPorIdProducto(1);
        System.out.println(insumosXproducto);
    }

    public static void testearProducto(){

        Producto producto;
        producto = obtenerProductoPorId(1);
        System.out.println(producto);
    }

    public static void testearPedido(){

        List<Pedido> pedidos;
        pedidos = obtenerTodosLosPedidos();
        System.out.println(pedidos);
    }

    public static void testearDetallePedido(){

        List<DetallePedido> detallesPedido;

        detallesPedido = obtenerDetallesPedidoPorIdPedido(1);

        System.out.println(detallesPedido);

    }

    public static void testearEstado(){

        EstadoPedido estadoPedido;
        estadoPedido = obtenerEstadoPorId(1);
        System.out.println(estadoPedido);

    }
}


// PROBLEMA EN: COMPRADOR, ESTADODAO, TOTAL