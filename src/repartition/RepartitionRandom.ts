import {IRepartition} from "./IRepartition";

export class RepartitionRandom implements IRepartition {

    constructor() {
    }

    /**
     * richesse définie par une distribution aléatoire entre 0 et 200.
     */
    calculeRichesse(): number {
        return Math.floor(Math.random() * Math.floor(20000))/100;
    }
}
