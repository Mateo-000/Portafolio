package project.DAO;

import project.entidades.ConexionJDBC;
import project.models.DetallePedido;
import project.models.EstadoPedido;
import project.models.Pedido;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import static project.DAO.DetallePedidoDAO.obtenerDetallesPedidoPorIdPedido;

public class EstadoDAO {

    private String nombre;
    private String descripcion;

    private Date fechaInicio;

    private Date fechaFin;

    public static EstadoPedido obtenerEstadoPorId(Integer idEstado) {

        EstadoPedido estadoPedido = null;

        Connection connection = null;

        PreparedStatement statement = null;

        ResultSet result = null;

        try {
            connection = ConexionJDBC.obtenerConexion();

            String sql = "SELECT * FROM estado_pedido WHERE id = ?";

            statement = connection.prepareStatement(sql);

            statement.setInt(1, idEstado);

            result = statement.executeQuery();

            while(result.next()) {

                estadoPedido = new EstadoPedido();

                estadoPedido.setDescripcion(result.getString("descripcion"));

                estadoPedido.setNombre(result.getString("nombre"));

                estadoPedido.setFechaInicio(result.getDate("fecha_inicio"));

                estadoPedido.setFechaFin(result.getDate("fecha_fin"));

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

        return estadoPedido;

    };

}
