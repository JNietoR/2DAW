
class Jugador {
    nombre: string;
    puntos_salud: number;
    puntos_ataque: number;
    dinero: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.puntos_salud = 20;
        this.puntos_ataque = 0;
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
    public calcularFuerzaInicial() {
        return Math.floor(Math.random() * (10 - 1) + 1);
    }
    toString(): string {
        return `Jugador: ${this.nombre}, HP: ${this.puntos_salud}, ATQ: ${this.puntos_ataque}, GOLD: ${this.dinero} }`;
    }

}
class Enemigo {
    nombre: string;
    puntos_ataque: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.puntos_ataque = 0;
        // puntos de vida ? para matarlos

    }
    public getNombre() {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public getPuntos_ataque() {
        return this.puntos_ataque;
    }

    public setPuntos_ataque(puntos_ataque: number) {
        this.puntos_ataque = puntos_ataque;
    }
    public calcularFuerzaEnemigo() {
        return Math.floor(Math.random() * (10 - 1) + 1);
    }
    
    public soltarDinero() {
        return Math.floor(Math.random() * (3 - 1) + 1);
    }
}
class Partida{
    migue= new Enemigo("Migue Roso");
    ramirez= new Enemigo("Ramirez");
    pablo= new Enemigo("Pablo Motos");

    enemigos: Enemigo[] = [this.migue,this.ramirez,this.pablo];


   historia: string =" aaa";
    
}