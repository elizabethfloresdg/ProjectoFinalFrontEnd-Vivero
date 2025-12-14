/* mock plantas */
const plantas = [
  {
    id: 1,
    titulo: "Monstera deliciosa",
    descripcion:
      "Hojas grandes y perforadas que aportan un estilo tropical y elegante. Fácil de cuidar y de rápido crecimiento.",
    precio: 25000,
    imagen: "./imagenes/monstera.jpg",
  },
  {
    id: 2,
    titulo: "Ficus lyrata",
    descripcion:
      "Planta protagonista por sus hojas grandes y brillantes. Ideal para espacios luminosos y modernos.",
    precio: 32000,
    imagen: "./imagenes/ficus_lyrata.jpg",
  },
  {
    id: 3,
    titulo: "Sansevieria",
    descripcion:
      "Muy resistente y perfecta para principiantes. Ayuda a purificar el aire y requiere pocos cuidados.",
    precio: 18000,
    imagen: "./imagenes/sansevieria.jpg",
  },
  {
    id: 4,
    titulo: "Pothos",
    descripcion:
      "Planta colgante de crecimiento rápido. Se adapta bien a distintos niveles de luz.",
    precio: 15000,
    imagen: "./imagenes/pothos.jpg",
  },
  {
    id: 5,
    titulo: "Calathea ornata",
    descripcion:
      "Hojas decorativas con vetas rosadas. Aporta color y sofisticación a interiores.",
    precio: 28000,
    imagen: "./imagenes/calathea.jpg",
  },
  {
    id: 6,
    titulo: "Alocasia amazonica",
    descripcion:
      "De hojas grandes y contrastadas. Ideal para ambientes cálidos y bien iluminados.",
    precio: 35000,
    imagen: "./imagenes/alocasia_amazonica.jpg",
  },
  {
    id: 7,
    titulo: "Zamioculca",
    descripcion:
      "Planta elegante y muy resistente. Tolera poca luz y riegos espaciados.",
    precio: 22000,
    imagen: "./imagenes/zamioculca.jpg",
  },
  {
    id: 8,
    titulo: "Philodendron brasil",
    descripcion:
      "Planta colgante con hojas verdes y amarillas. Muy decorativa y fácil de cuidar.",
    precio: 17000,
    imagen: "./imagenes/philodendron_brasil.jpg",
  },
  {
    id: 9,
    titulo: "Helecho Boston",
    descripcion:
      "Clásico y frondoso, ideal para dar frescura a interiores luminosos.",
    precio: 16000,
    imagen: "./imagenes/helecho_boston.jpg",
  },
  {
    id: 10,
    titulo: "Peperomia obtusifolia",
    descripcion:
      "Compacta y decorativa, con hojas carnosas. Ideal para estanterías y escritorios.",
    precio: 14000,
    imagen: "./imagenes/peperomia_obtusifolia.jpg",
  },
  {
    id: 11,
    titulo: "Cactus columnar",
    descripcion:
      "Minimalista y de bajo mantenimiento. Perfecto para espacios pequeños.",
    precio: 12000,
    imagen: "./imagenes/cactus_columnar.jpg",
  },
  {
    id: 12,
    titulo: "Suculenta echeveria",
    descripcion:
      "Pequeña y decorativa, ideal para sumar verde en cualquier rincón.",
    precio: 9000,
    imagen: "./imagenes/suculenta_echeveria.jpg",
  },
  {
    id: 13,
    titulo: "Dracaena marginata",
    descripcion: "Estilizada y moderna, perfecta para livings y oficinas.",
    precio: 27000,
    imagen: "./imagenes/dracaena_marginata.jpg",
  },
  {
    id: 14,
    titulo: "Palmera areca",
    descripcion:
      "Aporta frescura y movimiento. Ideal para espacios amplios y luminosos.",
    precio: 40000,
    imagen: "./imagenes/palmera_areca.jpg",
  },
  {
    id: 15,
    titulo: "Anturio rojo",
    descripcion:
      "Planta floral de gran presencia. Sus flores aportan color y elegancia.",
    precio: 30000,
    imagen: "./imagenes/anturio_rojo.jpg",
  },
];

/* seccion productos*/

function crearCard(planta) {
  const article = document.createElement("article");
  article.classList.add("producto--card");

  // img
  const img = document.createElement("img");
  img.src = planta.imagen;
  img.alt = planta.titulo;

  // contenido
  const contenido = document.createElement("div");
  contenido.classList.add("producto--card--contenido");

  // titulo
  const h3 = document.createElement("h3");
  h3.textContent = planta.titulo;

  // link descripcion
  const pLink = document.createElement("p");
  const link = document.createElement("a");
  link.href = "#.";
  link.textContent = "Ver descripción";
  link.classList.add("descripcion-link");
  pLink.appendChild(link);

  // precio
  const descripcion = document.createElement("p");
  descripcion.classList.add("descripcion-producto");
  descripcion.textContent = `${planta.descripcion}`;
  descripcion.style.display = "none";

  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.textContent = `$${planta.precio}`;

  const textoCarrito = document.createTextNode("Agregar al carrito");

  // boton carrito
  const button = document.createElement("button");
  button.setAttribute("data-id", planta.id);

  const icono = document.createElement("i");
  icono.classList.add("fa-solid", "fa-cart-shopping");
  icono.style.color = "#000000";

  button.appendChild(icono);
  button.appendChild(textoCarrito);
  button.addEventListener("click", () => {
    agregarAlCarrito(planta);
  });

  // evento descripcion
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (link.textContent === "Ver descripción") {
      link.innerText = "Ocultar descripción";
      img.style.display = "none";
      precio.style.display = "none";
      descripcion.style.display = "inline-block";
    } else {
      link.innerText = "Ver descripción";
      img.style.display = "inline-block";
      precio.style.display = "inline-block";
      descripcion.style.display = "none";
    }
  });

  //armado
  contenido.appendChild(h3);
  contenido.appendChild(descripcion);
  contenido.appendChild(pLink);
  contenido.appendChild(precio);
  contenido.appendChild(button);

  article.appendChild(img);
  article.appendChild(contenido);

  return article;
}

const contenedor = document.getElementById("productos--contenedor");

function cargarProductos() {
  contenedor.innerHTML = "";

  plantas.forEach((planta) => {
    const article = crearCard(planta);
    contenedor.appendChild(article);
  });
}

cargarProductos();

/* carrito*/

var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listaCarrito = document.querySelector(".carrito__lista");
const contadoresCarrito = document.querySelectorAll(".carrito__contador");
const btnVaciar = document.querySelector(".carrito__vaciar");
const totalCompra = document.getElementById("totalCompra");

/* agregar al carrito */

function agregarAlCarrito(producto) {
  const productoExistente = carrito.find((item) => item.id === producto.id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      ...producto,
      cantidad: 1,
    });
  }

  guardarCarrito();
  renderCarrito();
  actualizarTotal();
}

/*guardar en storage*/

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

/* render del carrito*/

function renderCarrito() {
  listaCarrito.innerHTML = "";

  carrito.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("carrito__item");
    console.log(producto);

    div.innerHTML = `
      <img src="${producto.imagen}"></img>
      <div class="carrito__item--text">${producto.titulo}</div>
      <div>x${producto.cantidad}</div>
      <div>$${producto.precio * producto.cantidad}</div>
    `;

    listaCarrito.appendChild(div);
  });

  actualizarContador();
}

/* contador*/

function actualizarContador() {
  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  contadoresCarrito.forEach((contador) => {
    contador.textContent = total;
  });
}

function actualizarTotal() {
  let total = 0;

  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });

  totalCompra.textContent = total;
}

/* vaciar carrito */

btnVaciar.addEventListener("click", () => {
  carrito = [];
  guardarCarrito();
  renderCarrito();
  actualizarTotal();
});

/* inicializar*/

renderCarrito();
actualizarTotal();

/* seccion contacto*/

const formulario = document.getElementById("formulario");
const mensajeForm = document.getElementById("mensaje-form");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    mensajeForm.innerText = "Por favor completá todos los campos.";
    mensajeForm.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    mensajeForm.innerText = "El correo electrónico no es válido.";
    mensajeForm.style.color = "red";
    return;
  }

  mensajeForm.innerText = "Mensaje enviado correctamente ✔️";
  mensajeForm.style.color = "green";

  formulario.submit();
});
