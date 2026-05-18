import AgendaLexer from "./generated/AgendaLexer.js";
import AgendaParser from "./generated/AgendaParser.js";
import { CustomAgendaVisitor } from "./CustomAgendaVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

// ── Listener de errores personalizado ────────────────────────────────────────
class ErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errores = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errores.push(`  Línea ${line}:${column} → ${msg}`);
    }
}

async function main() {
    let input;
    let nombreArchivo = 'input.txt';

    if (process.argv[2]) nombreArchivo = process.argv[2];

    try {
        input = fs.readFileSync(nombreArchivo, 'utf8');
        console.log(`\nArchivo de entrada: ${nombreArchivo}`);
    } catch (err) {
        input = await leerCadena();
    }

    console.log("─".repeat(60));
    console.log("Contenido de entrada:");
    console.log(input);
    console.log("─".repeat(60));

    // ── Análisis léxico ───────────────────────────────────────────────────────
    const inputStream = CharStreams.fromString(input);
    const lexer = new AgendaLexer(inputStream);
    const lexerErrors = new ErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrors);

    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();

    // ── Tabla de lexemas/tokens ───────────────────────────────────────────────
    const tokenNames = {
        1: 'AGENDA',
        2: 'LLAVE_ABR',
        3: 'LLAVE_CIE',
        4: 'PUNTO_COMA',
        5: 'DOS_PUNTOS',
        6: 'BARRA',
        7: 'DIG4',
        8: 'DIG2',
        9: 'CADENA',
        10: 'WS',
    };

    console.log("\n── Tabla de Lexemas / Tokens ───────────────────────────────");
    console.log(String("N°").padEnd(5) + String("Lexema").padEnd(25) + String("Token").padEnd(20) + "Línea");
    console.log("─".repeat(60));

    let contador = 1;
    for (const tok of tokenStream.tokens) {
        if (tok.type === -1) continue;
        const nombre = tokenNames[tok.type] || `TOKEN_${tok.type}`;
        console.log(
            String(contador).padEnd(5) +
            String(tok.text).padEnd(25) +
            String(nombre).padEnd(20) +
            tok.line
        );
        contador++;
    }

    if (lexerErrors.errores.length > 0) {
        console.log("\n✗ Errores léxicos encontrados:");
        lexerErrors.errores.forEach(e => console.log(e));
        return;
    }

    // ── Análisis sintáctico ───────────────────────────────────────────────────
    const inputStream2 = CharStreams.fromString(input);
    const lexer2 = new AgendaLexer(inputStream2);
    lexer2.removeErrorListeners();
    const tokenStream2 = new CommonTokenStream(lexer2);

    const parser = new AgendaParser(tokenStream2);
    const parserErrors = new ErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(parserErrors);

    const tree = parser.agenda();

    console.log("\n── Análisis Léxico y Sintáctico ────────────────────────────");
    if (parserErrors.errores.length > 0) {
        console.log("✗ Se encontraron errores sintácticos:");
        parserErrors.errores.forEach(e => console.log(e));
        return;
    }
    console.log("✓ Entrada válida. No se encontraron errores.");

    // ── Árbol de análisis sintáctico ──────────────────────────────────────────
    console.log("\n── Árbol de Análisis Sintáctico ────────────────────────────");
    console.log(tree.toStringTree(parser.ruleNames));

    // ── Interpretación y traducción ───────────────────────────────────────────
    const visitor = new CustomAgendaVisitor();
    visitor.visit(tree);
}

function leerCadena() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        rl.question("Ingrese el código fuente: ", answer => { rl.close(); resolve(answer); });
    });
}

main();
