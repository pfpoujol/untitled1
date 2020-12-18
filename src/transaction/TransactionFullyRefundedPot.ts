import {Individu} from "../Individu";
import {ITransaction} from "./ITransaction";
import {IInteraction} from "../interaction/IInteraction";

export class TransactionFullyRefundedPot implements ITransaction {
    private _interaction: IInteraction;
    constructor(interaction: IInteraction) {
        this._interaction = interaction;
    }
    /**
     * Une seconde loi de transaction telle que le pot commun soit intégralement reversé à un
     * seul des acteurs, choisi aléatoirement parmi les deux.
     * @param individus
     */
    transact(individus: Array<Individu>): void {
        const acteurs = this._interaction.choseActors(individus);
        const indexOfLuck = Math.round(Math.random());
        const luckyBastard = acteurs[indexOfLuck];
        const poorGuy = acteurs[indexOfLuck===0 ? 1 : 0];
        const pot = luckyBastard.richesse + poorGuy.richesse;
        luckyBastard.richesse = pot;
        poorGuy.richesse = 0;
    }
}
