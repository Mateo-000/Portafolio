package project.controllers;

import javafx.beans.property.SimpleIntegerProperty;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.input.MouseEvent;
import javafx.stage.Stage;
import project.models.DetallePedido;
import project.models.EstadoPedido;
import project.models.Pedido;
import javafx.beans.property.SimpleDoubleProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.collections.ObservableList;
import javafx.collections.FXCollections;
import project.controllers.PedidoController;

import project.DAO.PedidoDAO;
import project.models.Producto;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import static project.Main.currentStage;

public class PedidoController {
    private static Pedido pedidoSeleccionado;

    @FXML
    public TableColumn productoColumn;
    @FXML
    public TableColumn cantidadColumn;
    @FXML
    public TableColumn precioColumn;
    @FXML
    public TableColumn totalColumn;

    @FXML
    private Label titleLabel;

    @FXML
    private Label compradorId;

    @FXML
    private Label fechaInicioId;

    @FXML
    private Label fechaFinId;

    @FXML
    private Label fechaEspectativaId;

    @FXML
    private TableView<DetallePedido> productosTable;

    @FXML
    private Label totalPedidoId;

    public void initialize() {
        if (pedidoSeleccionado != null) {
            titleLabel.setText("Pedido número " + pedidoSeleccionado.getNumeroPedido());
            compradorId.setText("Comprador: " + pedidoSeleccionado.getComprador());
            fechaInicioId.setText("Fecha de inicio: " +pedidoSeleccionado.getFechaInicio().toString());
            fechaFinId.setText("Fecha expectativa de fin: " +pedidoSeleccionado.getFechaFinal().toString());
            fechaEspectativaId.setText("Fecha de fin: " +pedidoSeleccionado.getFechaEstimada().toString());

            productoColumn.setCellValueFactory(new PropertyValueFactory<>("producto"));
            precioColumn.setCellValueFactory(new PropertyValueFactory<>("precioUnitario"));
            cantidadColumn.setCellValueFactory(new PropertyValueFactory<>("cantidad"));
            totalColumn.setCellValueFactory(new PropertyValueFactory<>("total"));

            // Personalizando el valor de la columna del nombre del producto
            productoColumn.setCellFactory(column -> {
                return new TableCell<DetallePedido, Producto>() {
                    @Override
                    protected void updateItem(Producto producto, boolean empty) {
                        super.updateItem(producto, empty);
                        if (producto == null || empty) {
                            setText(null);
                        } else {
                            setText(producto.getNombre());
                        }
                    }
                };
            });

            // Llenar la tabla con los productos
            productosTable.setItems(FXCollections.observableArrayList(pedidoSeleccionado.getDetallePedido()));


            // Calcular el total del pedido
            double totalPedido = pedidoSeleccionado.getDetallePedido().stream()
                    .mapToDouble(detallePedido -> detallePedido.getTotal())
                    .sum();
            totalPedidoId.setText("Total del Pedido: " + Double.toString(totalPedido));
        }
    }

    public static void setPedidoSeleccionado(Pedido pedido) {
        pedidoSeleccionado = pedido;
    }
}

