export default class CardInfo {
    private _logo: Function = () => {};
    private _title: string = "";
    private _description: string = "";

    get Logo(): Function {
        return this._logo;
    }
    private set Logo(Logo: Function) {
        this._logo = Logo;
    }

    get title(): string {
        return this._title;
    }
    private set title(title: string) {
        this._title = title;
    }

    get description(): string {
        return this._description;
    }
    private set description(description: string) {
        this._description = description;
    }

    constructor(Logo: Function, title: string, description: string) {
        this.Logo = Logo;
        this.title = title;
        this.description = description;
    }
}