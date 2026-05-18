import AgendaListener from "./generated/AgendaListener.js";

export class CustomAgendaListener extends AgendaListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}