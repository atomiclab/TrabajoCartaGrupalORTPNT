document.getElementById("pedidoForm").addEventListener("submit", function (event) {
    event.preventDefault();
    validarPedido();
  });

function validarPedido() {
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let npedido = document.getElementById("npedido");
  let pedidosrealizados = document.getElementById("pedidosrealizados");
  let msgdefault = document.getElementById("msgdefault");

  let numero = parseInt(npedido.value);

  const productos = [
    "Americano", "Macchiato", "Cafe con Leche", "Latte", "Cappuccino",
    "Chocolate con menta", "Cafe con sirope", "Cafe con doble crema", "Moca Latte",
    "Cafe con Crema de Matcha", "Cappuccino frio", "Chocolate con menta", "Te Rooibos",
    "Te con cafe y leche", "Te de frutos rojos", "Te de naranja", "Cappuccino con limon"
];

  if (nombre.value === "" || apellido.value === "" || npedido.value === "") {
    alert("Campos vacios");
  }

  if (!isNaN(numero) && numero >= 0 && numero <= 17) {
    alert("Pedido realizado con exito");
    let producto = productos[numero - 1];
    msgdefault.style.display = "none";
    pedidosrealizados.innerHTML += `
    <tr>
        <td>Realizado por: ${nombre.value} ${apellido.value}. </td>
        <td>El producto solicitado es: ${npedido.value}, ${producto}</td>
    </tr>
    <br/>`;
  } else {
    alert("Numero de pedido incorrecto");
  }
}
