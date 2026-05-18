import AgendaVisitor from "./generated/AgendaVisitor.js";

export class CustomAgendaVisitor extends AgendaVisitor {

    constructor() {
        super();
        this.eventos = [];   // Lista de eventos interpretados
    }

    // ── agenda ────────────────────────────────────────────────────────────────
    visitAgenda(ctx) {
        console.log("\n── Interpretación / Ejecución ──────────────────────────────");
        console.log("📅 AGENDA");
        console.log("─".repeat(60));

        for (let i = 0; i < ctx.evento().length; i++) {
            this.visit(ctx.evento(i));
        }

        // Código JavaScript equivalente
        console.log("\n── Código JavaScript generado ──────────────────────────────");
        console.log("// Agenda de eventos");
        console.log("const agenda = [");
        for (const ev of this.eventos) {
            console.log(`  { fecha: "${ev.fecha}", hora: "${ev.hora}", descripcion: ${ev.descripcion} },`);
        }
        console.log("];");
        console.log("\nagenda.forEach(ev => {");
        console.log('  console.log(`[${ev.fecha} ${ev.hora}] ${ev.descripcion}`);');
        console.log("});");
    }

    // ── evento ────────────────────────────────────────────────────────────────
    visitEvento(ctx) {
        const fecha = this.visit(ctx.fecha());
        const hora  = this.visit(ctx.hora());
        const desc  = this.visit(ctx.descripcion());

        // Mostrar evento interpretado
        const descLimpia = desc.replace(/^"|"$/g, '');
        console.log(`  [${fecha}  ${hora}]  ${descLimpia}`);

        // Guardar para generación JS
        this.eventos.push({ fecha, hora, descripcion: desc });
    }

    // ── fecha ─────────────────────────────────────────────────────────────────
    visitFecha(ctx) {
        const dia  = ctx.DIG2(0).getText();
        const mes  = ctx.DIG2(1).getText();
        const anio = ctx.DIG4().getText();
        return `${dia}/${mes}/${anio}`;
    }

    // ── hora ──────────────────────────────────────────────────────────────────
    visitHora(ctx) {
        const hh = ctx.DIG2(0).getText();
        const mm = ctx.DIG2(1).getText();
        return `${hh}:${mm}`;
    }

    // ── descripcion ───────────────────────────────────────────────────────────
    visitDescripcion(ctx) {
        return ctx.CADENA().getText();   // Incluye comillas: "texto"
    }
}
