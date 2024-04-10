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

import static project.DAO.InsumoDAO.obtenerInsumoPorId;

public class InsumoXproductoDAO {

    private Insumo insumo;
    private double cantidad;

    public static List<InsumoXproducto> buscarInsumosPorIdProducto(Integer idProducto) {

        Connection connection = null;

        PreparedStatement statement = null;

        ResultSet result = null;

        List<InsumoXproducto> insumosXproducto = new ArrayList<>();

        InsumoXproducto insumoXproducto = null;

        try{

            connection = ConexionJDBC.obtenerConexion();

            String sql = "SELECT * FROM insumo_x_producto WHERE producto_id = ?";

            statement = connection.prepareStatement(sql);

            statement.setInt(1, idProducto);

            result = statement.executeQuery();

            while(result.next()) {

                insumoXproducto = new InsumoXproducto();

                insumoXproducto.setCantidad(result.getDouble("cantidad"));

                Integer idInsumo = result.getInt("insumo_id");

                insumoXproducto.setInsumo(obtenerInsumoPorId(idInsumo));

                insumosXproducto.add(insumoXproducto);

            } ;

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

        return insumosXproducto;
    }

}
