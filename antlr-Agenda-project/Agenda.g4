grammar Agenda;

// ── Reglas sintácticas ────────────────────────────────────────────────────────

agenda
    : 'agenda' '{' evento+ '}' ';' EOF
    ;

evento
    : fecha ':' hora ':' descripcion ';'
    ;

fecha
    : DIG2 '/' DIG2 '/' DIG4
    ;

hora
    : DIG2 ':' DIG2
    ;

descripcion
    : CADENA
    ;

// ── Reglas léxicas ────────────────────────────────────────────────────────────

DIG4    : [0-9][0-9][0-9][0-9] ;
DIG2    : [0-9][0-9] ;

CADENA  : '"' CARACTER* '"' ;

fragment CARACTER
    : ~["\r\n]       // cualquier carácter excepto comilla doble y salto de línea
    ;

WS      : [ \t\r\n]+ -> skip ;
