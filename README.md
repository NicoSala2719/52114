# Analizador Sintáctico — Lenguaje `agenda`

**Alumno:** Nicolás Salazar  
**Legajo:** 52114  
**Materia:** Sintaxis y Semántica de los Lenguajes  
**UTN FRM — Ingeniería en Sistemas de Información**  
**Tema asignado:** 39568_26

---

## Descripción

Este proyecto implementa un **analizador léxico, sintáctico, semántico e intérprete** para un lenguaje de agenda de eventos, utilizando **ANTLR4** con **JavaScript (Node.js)**.

El analizador realiza las siguientes tareas:
1. **Análisis léxico y sintáctico** — verifica si la entrada es válida e informa errores con número de línea.
2. **Tabla de lexemas/tokens** — muestra cada lexema reconocido y su tipo de token.
3. **Árbol de análisis sintáctico** — construye y muestra el árbol concreto en formato texto.
4. **Interpretación** — ejecuta el código fuente mostrando los eventos de la agenda.
5. **Traducción a JavaScript** — genera el código JavaScript equivalente (array + forEach).

---

## Gramática

```
<agenda>      ::= "agenda" "{" { <evento> } "}" ";"
<evento>      ::= <fecha> ":" <hora> ":" <descripcion> ";"
<fecha>       ::= [0-9]{2} "/" [0-9]{2} "/" [0-9]{4}
<hora>        ::= [0-9]{2} ":" [0-9]{2}
<descripcion> ::= '"' { <carácter> } '"'
```

---

## Requisitos previos

| Herramienta | Versión mínima | Verificación |
|---|---|---|
| Java (JRE) | 1.8 | `java -version` |
| Node.js | 16 | `node -v` |
| npm | — | `npm -v` |

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/nicosala2719/52114.git
cd 52114

# 2. Instalar dependencias
cd antlr-calculator-project
npm install
```

> Los archivos generados por ANTLR ya están en `generated/`.  
> Para regenerarlos manualmente:
> ```bash
> java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -listener -visitor -o ./generated Agenda.g4
> ```

---

## Ejecución

Desde la carpeta `antlr-calculator-project/`:

```bash
npm start                            # usa input.txt por defecto
node index.js input_correcto_1.txt
node index.js input_correcto_2.txt
node index.js input_incorrecto_1.txt
node index.js input_incorrecto_2.txt
```

---

## Ejemplos de entrada y salida

### ✅ Entrada correcta 1 — `input_correcto_1.txt`

**Código fuente:**
```
agenda {
    15/06/2025 : 09:00 : "Reunion de equipo" ;
    20/06/2025 : 14:30 : "Presentacion del proyecto" ;
    25/06/2025 : 10:00 : "Capacitacion ANTLR4" ;
} ;
```

**Salida:**
```
── Tabla de Lexemas / Tokens ───────────────────────────────
N°   Lexema                    Token               Línea
1    agenda                    AGENDA              1
2    {                         LLAVE_ABR           1
3    15                        DIG2                2
...

✓ Entrada válida. No se encontraron errores.

── Árbol de Análisis Sintáctico ────────────────────────────
(agenda agenda { (evento (fecha 15 / 06 / 2025) : (hora 09 : 00) : ...) ... } ; <EOF>)

── Interpretación / Ejecución ──────────────────────────────
📅 AGENDA
  [15/06/2025  09:00]  Reunion de equipo
  [20/06/2025  14:30]  Presentacion del proyecto
  [25/06/2025  10:00]  Capacitacion ANTLR4

── Código JavaScript generado ──────────────────────────────
const agenda = [
  { fecha: "15/06/2025", hora: "09:00", descripcion: "Reunion de equipo" },
  ...
];
agenda.forEach(ev => {
  console.log(`[${ev.fecha} ${ev.hora}] ${ev.descripcion}`);
});
```

### ✅ Entrada correcta 2 — `input_correcto_2.txt`

Agenda con un único evento. Funciona correctamente.

### ❌ Entrada incorrecta 1 — `input_incorrecto_1.txt`

Falta el punto y coma `;` al final de la agenda.

**Error reportado:**
```
✗ Se encontraron errores sintácticos:
  Línea 4:0 → missing ';' at '<EOF>'
```

### ❌ Entrada incorrecta 2 — `input_incorrecto_2.txt`

Año con solo 2 dígitos en lugar de 4 (`25` en vez de `2025`).

**Error reportado:**
```
✗ Se encontraron errores sintácticos:
  Línea 2:10 → mismatched input '25' expecting DIG4
```

---

## Estructura del proyecto

```
antlr-calculator-project/
├── Agenda.g4                   ← Gramática ANTLR4
├── index.js                    ← Programa principal
├── CustomAgendaVisitor.js      ← Visitor: interpretación y traducción a JS
├── antlr-4.13.2-complete.jar
├── package.json
└── generated/
    ├── AgendaLexer.js          ← Generado automáticamente
    ├── AgendaParser.js         ← Generado automáticamente
    ├── AgendaListener.js       ← Generado automáticamente
    └── AgendaVisitor.js        ← Generado automáticamente
```
