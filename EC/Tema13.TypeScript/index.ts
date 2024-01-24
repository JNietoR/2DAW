import * as readlineSync from 'readline-sync';
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
        return this.dinero;
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
function main(): void {
    let migue = new Enemigo("Migue Roso");
    let ramirez = new Enemigo("Ramirez");
    let pablo = new Enemigo("Pablo Motos");

    let enemigos: Enemigo[] = [migue, ramirez, pablo];


    let historia: string = "La historia comienza en el mundo conocido como Gaia, en donde la Reina Brahne Raza Alexandros XVI del reino de Alexandria ansía incrementar su poder bélico para conquistar los reinos vecinos e incrementar su territorio. La guerra pronto se desencadenará entre los pacíficos reinos del Continente de la Niebla. Garnet Von Alexandros XVII, hija adoptiva de la Reina Brahne, se encuentra deprimida por su posición real, más las incesantes pesadillas que tratan sobre un bote que navega ante un cielo con un misterioso ojo. Vivi Ornitier, un Mago Negro con apariencia de niño, camina solo por las calles de Alexandria, pretendiendo encontrar pistas acerca de sus origen y existencia.";
    console.log(historia);

    let nombreJugador: string = readlineSync.question("Indroduce nombre del jugador: ");

    let jugador = new Jugador(nombreJugador);

    let fuerzaInicialJugador = jugador.calcularFuerzaInicial();
    jugador.setPuntos_ataque(fuerzaInicialJugador);

    const decision = readlineSync.question('Tu fuerza inicial es ' + jugador.getPuntos_ataque() + '¿Quieres cambiar tu fuerza por 1 oro?');

    do {
        if (decision) {
            if (jugador.getDinero() >= 1) {
                jugador.setPuntos_ataque(jugador.calcularFuerzaInicial());
                jugador.setDinero(jugador.getDinero() - 1);
                const decision = readlineSync.keyInYNStrict('Tu fuerza inicial es ' + jugador.getPuntos_ataque() + '¿Quieres cambiar tu fuerza por 1 oro?');
            } else {
                console.log('No tienes suficiente oro para cambiar la fuerza.');
            }

        }
    } while (decision);

    function monstrarMenu(): void {
        console.log("1.Luchar contra el enemigo");
        console.log("2.Comprar Items");
        console.log("3. Consultar estadisticas");
        console.log("4. Salir del juego");

        const menuDecision = readlineSync.question('¿Que quieres hacer?');

        switch (menuDecision) {
            case 1:
                lucharEnemigo();
            case 2:
                comprarItems();
            case 3:
                jugador.toString();
            case 4:
                break;
        }
    }

    function lucharEnemigo(): void {
        
        function generarEnemigoAleatorio(): Enemigo {
            let posicion: number = Math.floor(Math.random() * 3);
            return enemigos[posicion];
        }
    
        const enemigoAleatorio = generarEnemigoAleatorio();
        console.log("Te has encontrado con:", enemigoAleatorio.getNombre());

        if(jugador.getPuntos_ataque() >= enemigoAleatorio.getPuntos_ataque()) { 
            let dineroActual=jugador.getDinero();
            let dineroGanado=enemigoAleatorio.soltarDinero();
            console.log("Has derrotado a "+enemigoAleatorio.getNombre()+" y has ganado"+dineroGanado);
            
        }else{

        }
    
    }

    function comprarItems() {

    }
}
    main();
