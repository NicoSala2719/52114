// Generated from Agenda.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AgendaListener from './AgendaListener.js';
import AgendaVisitor from './AgendaVisitor.js';

const serializedATN = [4,1,10,41,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,
6,8,0,0,36,0,10,1,0,0,0,2,21,1,0,0,0,4,28,1,0,0,0,6,34,1,0,0,0,8,38,1,0,
0,0,10,11,5,1,0,0,11,13,5,2,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,15,1,0,0,
0,15,13,1,0,0,0,15,16,1,0,0,0,16,17,1,0,0,0,17,18,5,3,0,0,18,19,5,4,0,0,
19,20,5,0,0,1,20,1,1,0,0,0,21,22,3,4,2,0,22,23,5,5,0,0,23,24,3,6,3,0,24,
25,5,5,0,0,25,26,3,8,4,0,26,27,5,4,0,0,27,3,1,0,0,0,28,29,5,8,0,0,29,30,
5,6,0,0,30,31,5,8,0,0,31,32,5,6,0,0,32,33,5,7,0,0,33,5,1,0,0,0,34,35,5,8,
0,0,35,36,5,5,0,0,36,37,5,8,0,0,37,7,1,0,0,0,38,39,5,9,0,0,39,9,1,0,0,0,
1,15];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AgendaParser extends antlr4.Parser {

    static grammarFileName = "Agenda.g4";
    static literalNames = [ null, "'agenda'", "'{'", "'}'", "';'", "':'", 
                            "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "DIG4", 
                             "DIG2", "CADENA", "WS" ];
    static ruleNames = [ "agenda", "evento", "fecha", "hora", "descripcion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AgendaParser.ruleNames;
        this.literalNames = AgendaParser.literalNames;
        this.symbolicNames = AgendaParser.symbolicNames;
    }



	agenda() {
	    let localctx = new AgendaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AgendaParser.RULE_agenda);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(AgendaParser.T__0);
	        this.state = 11;
	        this.match(AgendaParser.T__1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.evento();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8);
	        this.state = 17;
	        this.match(AgendaParser.T__2);
	        this.state = 18;
	        this.match(AgendaParser.T__3);
	        this.state = 19;
	        this.match(AgendaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	evento() {
	    let localctx = new EventoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AgendaParser.RULE_evento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.fecha();
	        this.state = 22;
	        this.match(AgendaParser.T__4);
	        this.state = 23;
	        this.hora();
	        this.state = 24;
	        this.match(AgendaParser.T__4);
	        this.state = 25;
	        this.descripcion();
	        this.state = 26;
	        this.match(AgendaParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AgendaParser.RULE_fecha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(AgendaParser.DIG2);
	        this.state = 29;
	        this.match(AgendaParser.T__5);
	        this.state = 30;
	        this.match(AgendaParser.DIG2);
	        this.state = 31;
	        this.match(AgendaParser.T__5);
	        this.state = 32;
	        this.match(AgendaParser.DIG4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora() {
	    let localctx = new HoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AgendaParser.RULE_hora);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(AgendaParser.DIG2);
	        this.state = 35;
	        this.match(AgendaParser.T__4);
	        this.state = 36;
	        this.match(AgendaParser.DIG2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	descripcion() {
	    let localctx = new DescripcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AgendaParser.RULE_descripcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(AgendaParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AgendaParser.EOF = antlr4.Token.EOF;
AgendaParser.T__0 = 1;
AgendaParser.T__1 = 2;
AgendaParser.T__2 = 3;
AgendaParser.T__3 = 4;
AgendaParser.T__4 = 5;
AgendaParser.T__5 = 6;
AgendaParser.DIG4 = 7;
AgendaParser.DIG2 = 8;
AgendaParser.CADENA = 9;
AgendaParser.WS = 10;

AgendaParser.RULE_agenda = 0;
AgendaParser.RULE_evento = 1;
AgendaParser.RULE_fecha = 2;
AgendaParser.RULE_hora = 3;
AgendaParser.RULE_descripcion = 4;

class AgendaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_agenda;
    }

	EOF() {
	    return this.getToken(AgendaParser.EOF, 0);
	};

	evento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EventoContext);
	    } else {
	        return this.getTypedRuleContext(EventoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterAgenda(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitAgenda(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitAgenda(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EventoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_evento;
    }

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	hora() {
	    return this.getTypedRuleContext(HoraContext,0);
	};

	descripcion() {
	    return this.getTypedRuleContext(DescripcionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterEvento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitEvento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitEvento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_fecha;
    }

	DIG2 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AgendaParser.DIG2);
	    } else {
	        return this.getToken(AgendaParser.DIG2, i);
	    }
	};


	DIG4() {
	    return this.getToken(AgendaParser.DIG4, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitFecha(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitFecha(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_hora;
    }

	DIG2 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AgendaParser.DIG2);
	    } else {
	        return this.getToken(AgendaParser.DIG2, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterHora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitHora(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitHora(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DescripcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AgendaParser.RULE_descripcion;
    }

	CADENA() {
	    return this.getToken(AgendaParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.enterDescripcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AgendaListener ) {
	        listener.exitDescripcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AgendaVisitor ) {
	        return visitor.visitDescripcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AgendaParser.AgendaContext = AgendaContext; 
AgendaParser.EventoContext = EventoContext; 
AgendaParser.FechaContext = FechaContext; 
AgendaParser.HoraContext = HoraContext; 
AgendaParser.DescripcionContext = DescripcionContext; 
