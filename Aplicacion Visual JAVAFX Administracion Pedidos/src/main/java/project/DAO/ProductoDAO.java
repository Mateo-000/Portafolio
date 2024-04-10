package project.DAO;

import project.entidades.ConexionJDBC;
import project.models.*;

import java.sql.*;
import java.time.LocalDate;
import java.util.*;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import static project.DAO.InsumoXproductoDAO.buscarInsumosPorIdProducto;

import static project.DAO.TamanioDAO.obtenerTamanioPorId;

public class ProductoDAO {

    private String codigo;

    private Tamanio tamanio;

    private String nombre;

    private List<InsumoXproducto> insumos;

    private double precio;


    public static Producto obtenerProductoPorId(Integer idProducto) {

        Connection connection = null;

        PreparedStatement statement = null;

        ResultSet result = null;

        Producto producto = null;

        try{

            connection = ConexionJDBC.obtenerConexion();

            String sql = "SELECT * FROM producto WHERE id = ?";

            statement = connection.prepareStatement(sql);

            statement.setInt(1, idProducto);

            result = statement.executeQuery();

            while(result.next()) {
                producto = new Producto();

                producto.setCodigo(result.getString("codigo"));

                producto.setNombre(result.getString("nombre"));

                producto.setPrecio(result.getDouble("precio"));

                List<InsumoXproducto> insumos;

                insumos = buscarInsumosPorIdProducto(idProducto);

                producto.setInsumos(insumos);

                producto.setTamanio(obtenerTamanioPorId(result.getInt("tipo_producto_id")));

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

        return producto;
    }
}
