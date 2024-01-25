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
    let garland = new Enemigo("Garland");
    let exdeath = new Enemigo("Exdeath");
    let sephiroth = new Enemigo("Sephiroth");

    let enemigos: Enemigo[] = [garland, exdeath, sephiroth];


    let historia: string = "Este juego reúne a héroes y villanos de diferentes entregas de la saga Final Fantasy. La trama gira en torno a dos deidades, Cosmos y Chaos, que convocan a guerreros de mundos paralelos para luchar en un conflicto cósmico. Cosmos busca la armonía y paz, mientras que Chaos busca la discordia y la destrucción. /n Los héroes convocados por Cosmos forman un grupo para enfrentarse a los secuaces de Chaos y restaurar el equilibrio. Sin embargo, cada batalla tiene consecuencias y, a medida que avanza la historia, los héroes descubren que sus acciones están ligadas a un ciclo sin fin de conflicto entre Cosmos y Chaos.";
    console.log(historia);
    console.log();

    let nombreJugador: string = readlineSync.question("Indroduce nombre del jugador: ");

    let jugador = new Jugador(nombreJugador);

    let fuerzaInicialJugador = jugador.calcularFuerzaInicial();
    jugador.setPuntos_ataque(fuerzaInicialJugador);

    let decision;

    do {
        console.log('Tu fuerza inicial es ' + jugador.getPuntos_ataque());
        decision = readlineSync.keyInYNStrict('Quieres cambiar tu fuerza por 1 oro?');

        if (decision) {
            if (jugador.getDinero() >= 1) {
                jugador.setPuntos_ataque(jugador.calcularFuerzaInicial());
                jugador.setDinero(jugador.getDinero() - 1);
                console.log('Tu nueva fuerza es ' + jugador.getPuntos_ataque());
                console.log(" ");
            } else {
                console.log('No tienes suficiente oro para cambiar la fuerza.');
                console.log(" ");
            }
        }
        console.log();
    } while (decision);
    mostrarMenu();


    function mostrarMenu(): void {
        console.log(" ");
        console.log("1.Luchar contra el enemigo");
        console.log("2.Comprar Items");
        console.log("3. Consultar estadisticas");
        console.log("4. Salir del juego");
        console.log(" ");

        const menuDecision = readlineSync.question('Que quieres hacer?');

        switch (menuDecision) {
            case '1':
                lucharEnemigo();
                console.log();
                break;
            case '2':
                comprarItems();
                console.log();
                break;
            case '3':
                console.log(jugador.toString());
                console.log();
                mostrarMenu();
                break;
            case '4':
                break;
        }
    }


    function lucharEnemigo(): void {

        function generarEnemigoAleatorio(): Enemigo {
            let posicion: number = Math.floor(Math.random() * 3);
            enemigos[posicion].setPuntos_ataque(enemigos[posicion].calcularFuerzaEnemigo());
            return enemigos[posicion];
        }

        const enemigoAleatorio = generarEnemigoAleatorio();
        console.log("Te has encontrado con: ", enemigoAleatorio.getNombre() + " Que tiene " + enemigoAleatorio.getPuntos_ataque() + " ATQ");

        if (jugador.getPuntos_ataque() >= enemigoAleatorio.getPuntos_ataque()) {
            let dineroSoltado = enemigoAleatorio.soltarDinero();
            console.log("Has derrotado a " + enemigoAleatorio.getNombre() + " y has ganado " + dineroSoltado + " G");
            jugador.setDinero(jugador.getDinero() + dineroSoltado);
            mostrarMenu();
            console.log();
        } else {
            let daño = enemigoAleatorio.getPuntos_ataque() - jugador.getPuntos_ataque();
            console.log("Eres más debil que " + enemigoAleatorio.getNombre() + " y has perdido " + daño + " puntos de vida");
            jugador.setPuntos_salud(jugador.getPuntos_salud() - daño);

            if (jugador.getPuntos_salud() > 0) {
                console.log('Tu estado actual es:' + jugador.toString());
                mostrarMenu();
                console.log();
            } else {
                console.log('Has muerto, reiniciando juego');
                console.log();
                console.log();

                main();
            }
        }
    }

    function comprarItems() {
        if (jugador.dinero > 0) {
            console.log("Tienes " + jugador.getDinero() + " G");
            console.log(" ");
            console.log("1. 2G - Cura 5 de vida");
            console.log("2. 5G - Comprar Arma +2 ATQ");
            console.log("3. 10G - Comprar Arma +5 ATQ");
            console.log("4. Salir de la tienda");
            console.log(" ");
            const storeDecision = readlineSync.question('¿Que quieres hacer?');

            switch (storeDecision) {

                case '1':
                    if (jugador.getDinero() >= 2) {
                        jugador.setPuntos_salud(jugador.getPuntos_salud() + 5);
                        jugador.setDinero(jugador.getDinero() - 2);
                        console.log("Actualmente tienes " + jugador.getDinero() + "G");
                        comprarItems();
                        console.log();
                    } else {
                        console.log("No tienes suficiente oro");
                        mostrarMenu();
                        console.log();
                    }
                    break;
                case '2':
                    if (jugador.getDinero() >= 5) {
                        jugador.setPuntos_ataque(jugador.getPuntos_ataque() + 2);
                        jugador.setDinero(jugador.getDinero() - 5);
                        console.log("Actualmente tienes " + jugador.getPuntos_ataque() + " de ATQ y te quedan " + jugador.getDinero() + " G");
                        comprarItems();
                        console.log();
                    } else {
                        console.log("No tienes suficiente oro");
                        comprarItems();
                        console.log();
                    }
                    break;
                case '3':
                    if (jugador.getDinero() >= 10) {
                        jugador.setPuntos_ataque(jugador.getPuntos_ataque() + 5);
                        jugador.setDinero(jugador.getDinero() - 10);
                        console.log("Actualmente tienes " + jugador.getPuntos_ataque() + " de ATQ y te quedan " + jugador.getDinero() + " G");
                        comprarItems();
                        console.log();
                    } else {
                        console.log("No tienes suficiente oro");
                        comprarItems();
                        console.log();
                    }
                    break;
                case '4':
                    mostrarMenu();
                    break;
            }
        } else {
            console.log("No tienes dinero para comprar items");
            mostrarMenu();
            console.log();
        }
    }

}
main();
