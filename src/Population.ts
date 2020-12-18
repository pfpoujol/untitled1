import {Individu} from "./Individu";
import {IRepartition} from "./repartition/IRepartition";
import {ITransaction} from "./transaction/ITransaction";
import {GiniCalculator} from "./GiniCalculator";

export class Population {
    get individus(): Array<Individu> {
        return this._individus;
    }
    private _nbGeneration: number;
    private _individus: Array<Individu> = [];
    private _transaction: ITransaction;
    constructor(nbIndividu: number, nbIteration: number, repartition: IRepartition, transaction: ITransaction) {
        this._nbGeneration = nbIteration;
        this._transaction = transaction;
        for (let i = 0; i < nbIndividu; i++) {
            this._individus.push(new Individu(repartition.calculeRichesse()));
        }
    }
    process() {
        const gini = new GiniCalculator();
        console.log('Coefficients de Gini initial : ' + gini.calculate(this._individus));
        console.log('Processing...');

        for (let i=0;i<this._nbGeneration;i++) {
            this._transaction.transact(this._individus);
        }
        console.log('Coefficients de Gini final : ' + gini.calculate(this._individus));
    }
}
