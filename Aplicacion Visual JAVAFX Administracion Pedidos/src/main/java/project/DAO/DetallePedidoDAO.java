package project.DAO;

import project.entidades.ConexionJDBC;
import project.models.DetallePedido;
import project.models.EstadoPedido;
import project.models.Pedido;

import java.sql.*;
import java.time.LocalDate;
import java.util.*;


import project.DAO.ProductoDAO;
import project.models.Producto;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import static project.DAO.ProductoDAO.obtenerProductoPorId;

public class DetallePedidoDAO {

    private Producto productoDAO;
    private int cantidadDAO;
    private double precioUnitarioDAO;
    private double subotalDAO;
    private double totalDAO;

    public static List<DetallePedido> obtenerDetallesPedidoPorIdPedido(Integer idPedido) {

        Connection connection = null;

        PreparedStatement statement = null;

        ResultSet result = null;

        DetallePedido detallePedido = null;

        List<DetallePedido> detallesPedido = new ArrayList<>();

        try{

            connection = ConexionJDBC.obtenerConexion();

            String sql = "SELECT * FROM detalle_pedido WHERE pedido_id = ? ";

            statement = connection.prepareStatement(sql);

            statement.setInt(1, idPedido);

            result = statement.executeQuery();

            while(result.next()){

                detallePedido = new DetallePedido();

                detallePedido.setCantidad(result.getInt("cantidad"));

                Integer idProducto = result.getInt("producto_id");

                Producto producto = obtenerProductoPorId(idProducto);

                detallePedido.setProducto(producto);

                detallePedido.setPrecioUnitario();

                detallePedido.setTotal();

                detallesPedido.add(detallePedido);

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

        return detallesPedido;
    }


}
