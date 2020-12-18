import {IInteraction} from "./IInteraction";
import {Individu} from "../Individu";
import {CanGetRandomInt} from "../CanGetRandomInt";

export class InteractionNeighbor implements IInteraction, CanGetRandomInt {
    private _lastIndividuIndex: number;

    constructor(private populationSize: number) {
        this._lastIndividuIndex = populationSize - 1;
    }

    choseActors(individus: Array<Individu>): Array<Individu> {
        let i1 = this.getRandomInt(this._lastIndividuIndex);
        let i2 = i1 === 0 ? 1 : i1-1;
        return [
            individus[i1],
            individus[i2]
        ]
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}
