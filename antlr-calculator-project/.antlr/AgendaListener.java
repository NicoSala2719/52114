import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link AgendaParser}.
 */
public interface AgendaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link AgendaParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(AgendaParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link AgendaParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(AgendaParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link AgendaParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterStat(AgendaParser.StatContext ctx);
	/**
	 * Exit a parse tree produced by {@link AgendaParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitStat(AgendaParser.StatContext ctx);
	/**
	 * Enter a parse tree produced by {@link AgendaParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(AgendaParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link AgendaParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(AgendaParser.ExprContext ctx);
}