package project;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.scene.Parent;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.io.IOException;
import java.io.File;


public class Main extends Application {

    private SessionFactory sessionFactory;

    public static Stage currentStage;

    @Override
    public void start(Stage primaryStage) throws Exception {
        // Configurar la sesión de Hibernate
        Configuration configuration = new Configuration();
        configuration.configure("hibernate.cfg.xml");
        sessionFactory = configuration.buildSessionFactory();

        // Cargar el archivo FXML desde el directorio resources
        try {
            File fxmlFile = new File("src\\main\\resources\\views\\Menu.fxml");
            Parent root = FXMLLoader.load(fxmlFile.toURI().toURL());
            currentStage = primaryStage;
            // Configurar la escena y mostrarla en la ventana principal
            primaryStage.setTitle("Mi aplicación JavaFX");
            primaryStage.setScene(new Scene(root));
            primaryStage.show();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static void closeWindow(Stage stage) {
        stage.close();
    }


    @Override
    public void stop() throws Exception {
        // Cerrar la sesión de Hibernate al cerrar la aplicación
        if (sessionFactory != null) {
            sessionFactory.close();
        }
    }

    public static void main(String[] args) {
        launch(args);
    }
}
