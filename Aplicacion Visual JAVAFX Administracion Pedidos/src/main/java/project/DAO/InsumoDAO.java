package project.DAO;

import project.models.Insumo;
import project.models.InsumoXproducto;

import project.entidades.ConexionJDBC;
import project.models.*;

import java.sql.*;
import java.time.LocalDate;
import java.util.*;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import static project.DAO.InsumoXproductoDAO.buscarInsumosPorIdProducto;

public class InsumoDAO {

    private String nombre;

    public static Insumo obtenerInsumoPorId(Integer idInsumo) {

        Connection connection = null;

        PreparedStatement statement = null;

        ResultSet result = null;

        Insumo insumo = null;

        try{

            connection = ConexionJDBC.obtenerConexion();

            String sql = "SELECT * FROM insumo WHERE id = ?";

            statement = connection.prepareStatement(sql);

            statement.setInt(1, idInsumo);

            result = statement.executeQuery();

            while(result.next()) {

                insumo = new Insumo();

                insumo.setNombre(result.getString("nombre"));

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

        return insumo;
    }


}
