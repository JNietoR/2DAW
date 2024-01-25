"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.nombre = nombre;
        this.puntos_salud = 20;
        this.puntos_ataque = 0;
        this.dinero = 2;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Jugador.prototype.getPuntos_salud = function () {
        return this.puntos_salud;
    };
    Jugador.prototype.setPuntos_salud = function (puntos_salud) {
        return this.puntos_salud = puntos_salud;
    };
    Jugador.prototype.getPuntos_ataque = function () {
        return this.puntos_ataque;
    };
    Jugador.prototype.setPuntos_ataque = function (puntos_ataque) {
        this.puntos_ataque = puntos_ataque;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.setDinero = function (dinero) {
        this.dinero = dinero;
    };
    Jugador.prototype.calcularFuerzaInicial = function () {
        return Math.floor(Math.random() * (10 - 1) + 1);
    };
    Jugador.prototype.toString = function () {
        return "Jugador: ".concat(this.nombre, ", HP: ").concat(this.puntos_salud, ", ATQ: ").concat(this.puntos_ataque, ", GOLD: ").concat(this.dinero, " }");
    };
    return Jugador;
}());
var Enemigo = /** @class */ (function () {
    function Enemigo(nombre) {
        this.nombre = nombre;
        this.puntos_ataque = 0;
        // puntos de vida ? para matarlos
    }
    Enemigo.prototype.getNombre = function () {
        return this.nombre;
    };
    Enemigo.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Enemigo.prototype.getPuntos_ataque = function () {
        return this.puntos_ataque;
    };
    Enemigo.prototype.setPuntos_ataque = function (puntos_ataque) {
        this.puntos_ataque = puntos_ataque;
    };
    Enemigo.prototype.calcularFuerzaEnemigo = function () {
        return Math.floor(Math.random() * (10 - 1) + 1);
    };
    Enemigo.prototype.soltarDinero = function () {
        return Math.floor(Math.random() * (3 - 1) + 1);
    };
    return Enemigo;
}());
function main() {
    var garland = new Enemigo("Garland");
    var exdeath = new Enemigo("Exdeath");
    var sephiroth = new Enemigo("Sephiroth");
    var enemigos = [garland, exdeath, sephiroth];
    var historia = "Este juego reúne a héroes y villanos de diferentes entregas de la saga Final Fantasy. La trama gira en torno a dos deidades, Cosmos y Chaos, que convocan a guerreros de mundos paralelos para luchar en un conflicto cósmico. Cosmos busca la armonía y paz, mientras que Chaos busca la discordia y la destrucción. /n Los héroes convocados por Cosmos forman un grupo para enfrentarse a los secuaces de Chaos y restaurar el equilibrio. Sin embargo, cada batalla tiene consecuencias y, a medida que avanza la historia, los héroes descubren que sus acciones están ligadas a un ciclo sin fin de conflicto entre Cosmos y Chaos.";
    console.log(historia);
    console.log();
    var nombreJugador = readlineSync.question("Indroduce nombre del jugador: ");
    var jugador = new Jugador(nombreJugador);
    var fuerzaInicialJugador = jugador.calcularFuerzaInicial();
    jugador.setPuntos_ataque(fuerzaInicialJugador);
    var decision;
    do {
        console.log('Tu fuerza inicial es ' + jugador.getPuntos_ataque());
        decision = readlineSync.keyInYNStrict('Quieres cambiar tu fuerza por 1 oro?');
        if (decision) {
            if (jugador.getDinero() >= 1) {
                jugador.setPuntos_ataque(jugador.calcularFuerzaInicial());
                jugador.setDinero(jugador.getDinero() - 1);
                console.log('Tu nueva fuerza es ' + jugador.getPuntos_ataque());
                console.log(" ");
            }
            else {
                console.log('No tienes suficiente oro para cambiar la fuerza.');
                console.log(" ");
            }
        }
        console.log();
    } while (decision);
    mostrarMenu();
    function mostrarMenu() {
        console.log(" ");
        console.log("1.Luchar contra el enemigo");
        console.log("2.Comprar Items");
        console.log("3. Consultar estadisticas");
        console.log("4. Salir del juego");
        console.log(" ");
        var menuDecision = readlineSync.question('Que quieres hacer?');
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
    function lucharEnemigo() {
        function generarEnemigoAleatorio() {
            var posicion = Math.floor(Math.random() * 3);
            enemigos[posicion].setPuntos_ataque(enemigos[posicion].calcularFuerzaEnemigo());
            return enemigos[posicion];
        }
        var enemigoAleatorio = generarEnemigoAleatorio();
        console.log("Te has encontrado con: ", enemigoAleatorio.getNombre() + " Que tiene " + enemigoAleatorio.getPuntos_ataque() + " ATQ");
        if (jugador.getPuntos_ataque() >= enemigoAleatorio.getPuntos_ataque()) {
            var dineroSoltado = enemigoAleatorio.soltarDinero();
            console.log("Has derrotado a " + enemigoAleatorio.getNombre() + " y has ganado " + dineroSoltado + " G");
            jugador.setDinero(jugador.getDinero() + dineroSoltado);
            mostrarMenu();
            console.log();
        }
        else {
            var daño = enemigoAleatorio.getPuntos_ataque() - jugador.getPuntos_ataque();
            console.log("Eres más debil que " + enemigoAleatorio.getNombre() + " y has perdido " + daño + " puntos de vida");
            jugador.setPuntos_salud(jugador.getPuntos_salud() - daño);
            if (jugador.getPuntos_salud() > 0) {
                console.log('Tu estado actual es:' + jugador.toString());
                mostrarMenu();
                console.log();
            }
            else {
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
            var storeDecision = readlineSync.question('¿Que quieres hacer?');
            switch (storeDecision) {
                case '1':
                    if (jugador.getDinero() >= 2) {
                        jugador.setPuntos_salud(jugador.getPuntos_salud() + 5);
                        jugador.setDinero(jugador.getDinero() - 2);
                        console.log("Actualmente tienes " + jugador.getDinero() + "G");
                        comprarItems();
                        console.log();
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
                        console.log("No tienes suficiente oro");
                        comprarItems();
                        console.log();
                    }
                    break;
                case '4':
                    mostrarMenu();
                    break;
            }
        }
        else {
            console.log("No tienes dinero para comprar items");
            mostrarMenu();
            console.log();
        }
    }
}
main();
