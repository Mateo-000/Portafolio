package project.controllers;

import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.event.ActionEvent;
import javafx.stage.Stage;

import java.io.File;
import java.io.IOException;

import static project.Main.*;



public class MenuController {

    Stage pedidosStage = new Stage();

    Stage insumosStage = new Stage();

    Stage productosStage = new Stage();

    public void callPedidos(ActionEvent actionEvent) {

        try {
            File fxmlFile = new File("src\\main\\resources\\views\\Pedidos.fxml");
            Parent root = FXMLLoader.load(fxmlFile.toURI().toURL());
            currentStage = pedidosStage;

            // Configurar la escena y mostrarla en la ventana principal
            pedidosStage.setTitle("PEDIDOS");
            pedidosStage.setScene(new Scene(root));
            pedidosStage.show();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public void callInsumos(ActionEvent actionEvent) {
        try {
            File fxmlFile = new File("src\\main\\resources\\views\\Insumos.fxml");
            Parent root = FXMLLoader.load(fxmlFile.toURI().toURL());
            currentStage = insumosStage;

            // Configurar la escena y mostrarla en la ventana principal
            insumosStage.setTitle("INSUMOS");
            insumosStage.setScene(new Scene(root));
            insumosStage.show();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void callProductos(ActionEvent actionEvent) {
        try {
            File fxmlFile = new File("src\\main\\resources\\views\\Productos.fxml");
            Parent root = FXMLLoader.load(fxmlFile.toURI().toURL());
            currentStage = productosStage;

            // Configurar la escena y mostrarla en la ventana principal
            productosStage.setTitle("PRODUCTOS");
            productosStage.setScene(new Scene(root));
            productosStage.show();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void menuClose(ActionEvent actionEvent){
        closeWindow(currentStage);
    }
}


