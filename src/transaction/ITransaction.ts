import {Individu} from "../Individu";

export interface ITransaction {
    transact(individus: Array<Individu>): void;

}

