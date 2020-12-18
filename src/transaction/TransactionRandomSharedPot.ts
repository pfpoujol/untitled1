import {Individu} from "../Individu";
import {ITransaction} from "./ITransaction";
import {IInteraction} from "../interaction/IInteraction";

export class TransactionRandomSharedPot implements ITransaction {
    private _interaction: IInteraction;
    constructor(interaction: IInteraction) {
        this._interaction = interaction;
    }
    /**
     * la totalité de l’argent des deux acteurs est
     * mise dans un pot commun, puis ce pot est divisé aléatoirement entre les deux acteurs.
     * @param individus
     */
    transact(individus: Array<Individu>): void {
        const acteurs = this._interaction.choseActors(individus);
        const acteur0 = acteurs[0];
        const acteur1 = acteurs[1];
        const pot = acteur0.richesse + acteur1.richesse;
        const proportionPartage = Math.random();
        acteur0.richesse = pot * proportionPartage;
        acteur1.richesse = pot * (1-proportionPartage);
    }
}
