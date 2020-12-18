export class Individu {
    get richesse(): number {
        return this._richesse;
    }

    set richesse(value: number) {
        this._richesse = value;
    }

    private _richesse: number;

    constructor(richesse: number) {
        this._richesse = richesse;
    }
}
