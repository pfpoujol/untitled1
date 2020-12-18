import {Individu} from "./Individu";

export class GiniCalculator {
    /**
     * Sort and calculate GINI
     * @param individus
     */
    calculate(individus: Array<Individu>) {
        let gini2 = 0;
        let gini = 0;
        let nbIndividu = individus.length;
        let sortedIndividus = individus.sort((a,b) => {return a.richesse - b.richesse});
        for (const [i, individu] of sortedIndividus.entries()) {
            gini += (i + 1) * individu.richesse;
            gini2 += individu.richesse;
        }

        return Math.round(100*((2 * gini) / (nbIndividu * gini2) - ((nbIndividu + 1) / nbIndividu)))/100;
    }
}
