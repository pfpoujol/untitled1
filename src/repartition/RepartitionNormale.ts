import {IRepartition} from './IRepartition';

export class RepartitionNormale implements IRepartition {
    private _mu: number;
    private _sigma: number;

    constructor(mu: number, sigma: number) {
        this._mu = mu;
        this._sigma = sigma;
    }
    /**
     * richesse définie par une distribution normale de paramètres μ et σ.
     */
    calculeRichesse(): number {
        return Math.round(100*(this._mu + this._sigma * Math.sqrt(-2.0 * Math.log(Math.random())) * Math.sin(2.0 * Math.PI * Math.random())))/100;
    }
}
