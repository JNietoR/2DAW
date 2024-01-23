function calcularFuerzaInicial() {
    let min = Math.ceil(1);
    let max = Math.floor(10);
    return Math.floor(Math.random() * (10 - 1) + 1);
}


class Jugador {
    nombre: string;
    puntos_salud: number;
    puntos_ataque: number;
    dinero: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.puntos_salud = 20;
        this.puntos_ataque = calcularFuerzaInicial();
        this.dinero = 2;

    }
    public getNombre() {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public getPuntos_salud() {
        return this.puntos_salud;
    }
    public setPuntos_salud(puntos_salud: number) {
        return this.puntos_salud = puntos_salud;
    }
    public getPuntos_ataque() {
        return this.puntos_ataque;
    }

    public setPuntos_ataque(puntos_ataque: number) {
        this.puntos_ataque = puntos_ataque;
    }
    public getDinero() {
        return this.nombre;
    }

    public setDinero(dinero: number) {
        this.dinero = dinero;
    }



}
class Enemigo {

}