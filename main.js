const items = [
    {
        id: 1,
        producto: "Manzana",
        precio: 2500,
        fechaVencimiento: "15-12-2022",
        descripcion: "Manzana",
        categoria: "Fruta",
        oferta: true,
    },
    {
        id: 2,
        producto: "Kiwi",
        precio: 1000,
        fechaVencimiento: "16-12-2022",
        descripcion: "Kiwi",
        categoria: "Fruta",
        oferta: false,
    },
    {
        id: 3,
        producto: "Tomate",
        precio: 1000,
        fechaVencimiento: "17-12-2022",
        descripcion: "Tomate",
        categoria: "Verdura",
        oferta: true,
    },
    {
        id: 4,
        producto: "Cebolla",
        precio: 800,
        fechaVencimiento: "18-12-2022",
        descripcion: "Cebolla",
        categoria: "Verdura",
        oferta: false,
    },
    {
        id: 5,
        producto: "Piña",
        precio: 3000,
        fechaVencimiento: "19-12-2022",
        descripcion: "Piña",
        categoria: "Fruta",
        oferta: false,
    },
    {
        id: 6,
        producto: "Cerezas",
        precio: 1500,
        fechaVencimiento: "20-12-2022",
        descripcion: "Cerezas",
        categoria: "Fruta",
        oferta: false,
    },
    {
        id: 7,
        producto: "Palta",
        precio: 3300,
        fechaVencimiento: "21-12-2022",
        descripcion: "Palta",
        categoria: "Verdura",
        oferta: false,
    },
    {
        id: 8,
        producto: "Platano",
        precio: 2000,
        fechaVencimiento: "22-12-2022",
        descripcion: "Platano",
        categoria: "Fruta",
        oferta: true,
    },
    {
        id: 9,
        producto: "Lechuga",
        precio: 1200,
        fechaVencimiento: "23-12-2022",
        descripcion: "Lechuga",
        categoria: "Verdura",
        oferta: false,
    },
    {
        id: 10,
        producto: "Frutilla",
        precio: 1400,
        fechaVencimiento: "24-12-2022",
        descripcion: "Frutilla",
        categoria: "Fruta",
        oferta: true,
    },
    {
        id: 11,
        producto: "Papaya",
        precio: 1700,
        fechaVencimiento: "25-12-2022",
        descripcion: "Papaya",
        categoria: "Fruta",
        oferta: false,
    },
    {
        id: 12,
        producto: "Camote",
        precio: 1900,
        fechaVencimiento: "26-12-2022",
        descripcion: "Camote",
        categoria: "Verdura",
        oferta: true,
    },
    {
        id: 13,
        producto: "Uvas",
        precio: 2100,
        fechaVencimiento: "27-12-2022",
        descripcion: "Uvas",
        categoria: "Fruta",
        oferta: false,
    },
    {
        id: 14,
        producto: "Arandano",
        precio: 1000,
        fechaVencimiento: "28-12-2022",
        descripcion: "Arandano",
        categoria: "Fruta",
        oferta: false,
    },
    {
        id: 15,
        producto: "Mango",
        precio: 5000,
        fechaVencimiento: "29-12-2022",
        descripcion: "Mango",
        categoria: "Fruta",
        oferta: true,
    },
];

function getOffer(productos, valorDescuento) {
    const descuentoProducto = productos.filter((item) => item.oferta === true);
    descuentoProducto.forEach((producto) => {
        const precio = producto.precio;
        const descuento = (precio / 100) * valorDescuento;
        const precioConDescuento = precio - descuento;
        producto.precio = precioConDescuento;
    });
    return descuentoProducto;
}

function ordenProducto(productos) {
    const ordenAlfabetico = [...productos].sort((a, b) => {
        if (a.producto < b.producto) {
            return -1;
        } else if (a.producto > b.producto) {
            return 1;
        } else {
            return 0;
        }
    });
    return ordenAlfabetico;
}

function obtenerProductoPorNombre(productos, name) {
    const nombre = productos.find((item) => item.producto === name);
    if (!nombre) {
        return "Lo lamentamos, no tenemos el producto disponible.";
    }
    alert("Tu producto buscado fue: " + nombre.producto);
    return "Tu producto fue: " + nombre.producto;
}

if (confirm("¿Quisieras ver las ofertas disponibles?") === true) {
    console.log("Ofertas disponibles", getOffer(items, 50));
} else {
    console.log("Este usuario no deseaba ver las ofertas disponibles.");
}

const busquedaProducto = prompt("¿Que producto estás buscando?");

console.log(obtenerProductoPorNombre(items, busquedaProducto));
console.log(ordenProducto(items));