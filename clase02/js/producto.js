class Producto {
    constructor(n, s, p, d) {
        this.nombre = n
        this.stock = s
        this.precio = p
        this.disponible = d
    }

    get Precio () {
        return (this.precio * 1.21).toFixed(2)
    }

    set Precio(value) {
        this.precio = value
    }

    Mostrar () {
        console.log( `El precio es ${this.precio}`)
    }
}