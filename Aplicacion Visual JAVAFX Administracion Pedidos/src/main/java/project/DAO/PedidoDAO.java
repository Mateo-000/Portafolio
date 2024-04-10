package project.DAO;

import project.entidades.ConexionJDBC;
import project.models.DetallePedido;
import project.models.EstadoPedido;
import project.models.Pedido;

import java.sql.*;
import java.time.LocalDate;
import java.util.*;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import project.DAO.DetallePedidoDAO;

import static project.DAO.DetallePedidoDAO.obtenerDetallesPedidoPorIdPedido;

import static project.DAO.EstadoDAO.obtenerEstadoPorId;

public class PedidoDAO {

    private Integer numeroPedidoDAO;
    private List<DetallePedido> detallePedidoDAO;
    private Date fechaInicioDAO;
    private Date fechaEstimadaDAO;
    private Date fechaFinalDAO;

    private String compradorDAO;

    private EstadoPedido estadoDAO;


    public static List<Pedido> obtenerTodosLosPedidos() {

        List<Pedido> pedidos = new ArrayList<>();;

        Pedido pedido = null;

        Connection connection = null;

        PreparedStatement statement = null;

        ResultSet result = null;

        try {
            connection = ConexionJDBC.obtenerConexion();

            String sql = "SELECT * FROM pedido";

            statement = connection.prepareStatement(sql);

            result = statement.executeQuery();

            while(result.next()) {
                pedido = new Pedido();

                pedido.setNumeroPedido(result.getInt("id"));

                List<DetallePedido> detallesPedido;

                detallesPedido = obtenerDetallesPedidoPorIdPedido(pedido.getNumeroPedido());

                pedido.setDetallePedido(detallesPedido);

                pedido.setFechaInicio(result.getDate("fecha_inicio"));

                pedido.setFechaEstimada(result.getDate("fecha_estimada"));

                pedido.setFechaFinal(result.getDate("fecha_final"));

                Integer idEstado = result.getInt("estado_id");

                pedido.setEstado(obtenerEstadoPorId(idEstado));

                pedido.setComprador(result.getString("comprador"));

                pedido.setTotal(result.getDouble("total_pedido"));

                pedidos.add(pedido);

            }

        } catch(SQLException e) {

            e.printStackTrace();

        } finally {
            try {
                if (result != null) result.close();
                if (statement != null) statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }

        }



        return pedidos;
    }
}
