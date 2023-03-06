module com.example.vcpx {
  requires javafx.controls;
  requires javafx.fxml;


  opens com.example.vcpx to javafx.fxml;
  exports com.example.vcpx;
}
