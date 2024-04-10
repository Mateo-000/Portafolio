package project.entidades;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionJDBC {

    private static final String URL = "jdbc:sqlite:./src/main/resources/HDB.db"; // Ruta de tu base de datos SQLite

    public static Connection obtenerConexion() throws SQLException {
        return DriverManager.getConnection(URL);
    }
}
