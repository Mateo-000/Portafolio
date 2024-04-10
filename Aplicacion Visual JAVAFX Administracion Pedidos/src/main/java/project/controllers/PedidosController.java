package project.controllers;

import javafx.beans.property.SimpleIntegerProperty;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.input.MouseEvent;
import javafx.stage.Stage;
import project.models.EstadoPedido;
import project.models.Pedido;
import javafx.beans.property.SimpleDoubleProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.collections.ObservableList;
import javafx.collections.FXCollections;
import static project.controllers.PedidoController.setPedidoSeleccionado;

import project.DAO.PedidoDAO;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import static project.Main.currentStage;

public class PedidosController {
    public TableView<Pedido> pedidosTable;

    Stage pedidoStage = new Stage();

    public TableColumn<Pedido, Integer> numeroPedido;
    public TableColumn<Pedido, Date> fechaPedido;
    public TableColumn<Pedido, String> compradorPedido;
    public TableColumn<Pedido, String> estadoPedido;
    public TableColumn<Pedido, Double> totalPedido;

    public ComboBox<EstadoPedido> estados;

    public void initialize() {
        estadoPedido.setCellValueFactory(cellData -> new SimpleStringProperty(cellData.getValue().getEstado().getNombre()));
        numeroPedido.setCellValueFactory(cellData -> new SimpleObjectProperty<>(cellData.getValue().getNumeroPedido()));
        compradorPedido.setCellValueFactory(cellData -> new SimpleStringProperty(cellData.getValue().getComprador()));
        fechaPedido.setCellValueFactory(cellData -> new SimpleObjectProperty<>(cellData.getValue().getFechaInicio()));
        totalPedido.setCellValueFactory(cellData -> new SimpleObjectProperty<>(cellData.getValue().getTotal()));

        PedidoDAO pedidoDAO = new PedidoDAO();

        List<Pedido> listaPedidos = pedidoDAO.obtenerTodosLosPedidos();
        ObservableList<Pedido> pedidos = FXCollections.observableArrayList(listaPedidos);

        pedidosTable.setItems(pedidos);

    }

    public void callPedido(MouseEvent mouseEvent) {

        try {
            Pedido pedidoSeleccionado = pedidosTable.getSelectionModel().getSelectedItem();
            PedidoController.setPedidoSeleccionado(pedidoSeleccionado); // Pasar el pedido seleccionado
            File fxmlFile = new File("src\\main\\resources\\views\\Pedido.fxml");
            Parent root = FXMLLoader.load(fxmlFile.toURI().toURL());
            currentStage = pedidoStage;
            // Configurar la escena y mostrarla en la ventana principal
            pedidoStage.setScene(new Scene(root));
            pedidoStage.show();


        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
