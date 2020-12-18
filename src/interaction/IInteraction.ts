import {Individu} from "../Individu";

export interface IInteraction {
    choseActors(individus: Array<Individu>): Array<Individu>;

}
