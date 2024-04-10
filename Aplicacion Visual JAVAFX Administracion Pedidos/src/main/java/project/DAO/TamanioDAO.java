package project.DAO;

import project.entidades.ConexionJDBC;
import project.models.InsumoXproducto;
import project.models.Producto;
import project.models.Tamanio;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import static project.DAO.InsumoXproductoDAO.buscarInsumosPorIdProducto;

public class TamanioDAO {

    private double cantidad;

    private String unidadMedida;

    public static Tamanio obtenerTamanioPorId(Integer idTamanio){

        Connection connection = null;

        PreparedStatement statement = null;

        ResultSet result = null;

        Tamanio tamanio = null;

        try{

            connection = ConexionJDBC.obtenerConexion();

            String sql = "SELECT * FROM tamanio WHERE id = ?";

            statement = connection.prepareStatement(sql);

            statement.setInt(1, idTamanio);

            result = statement.executeQuery();

            while(result.next()) {
                 tamanio = new Tamanio();

                 tamanio.setCantidad(result.getDouble("cantidad"));

                 tamanio.setUnidadMedida(result.getString("unidad_medida"));

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

        return tamanio;
    }

}
