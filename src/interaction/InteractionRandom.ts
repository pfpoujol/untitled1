import {IInteraction} from "./IInteraction";
import {Individu} from "../Individu";
import {CanGetRandomInt} from "../CanGetRandomInt";

export class InteractionRandom implements IInteraction, CanGetRandomInt {
    private _lastIndividuIndex: number;
    constructor(private populationSize: number) {
        this._lastIndividuIndex = populationSize-1;
    }

    /**
     * les deux acteurs sont choisis aléatoirement dans la population
     * @param individus
     */
    choseActors(individus: Array<Individu>) : Array<Individu> {
        let i1 = this.getRandomInt(this._lastIndividuIndex);
        let i2;
        do {
         i2 = this.getRandomInt(this._lastIndividuIndex);
        } while (i1 === i2)
        return [
            individus[i1],
            individus[i2]
        ]
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

