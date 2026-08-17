import { DATA } from "../data/DATA";
import { slugify } from "../utils/general.utils";

export default class LinkInfo {
    private _address: string = "";
    private _logo: Function = () => {};
    private _name: string = "";
    private _sluggifiedName: string = "";
    private _internal: boolean = false;

    get address(): string {
        return this._address;
    }
    private set address(address: string) {
        this._address = address;
    }

    get Logo(): Function {
        return this._logo;
    }   
    private set Logo(logo: Function) {
        this._logo = logo;
    }

    get name(): string {
        return this._name;
    }
    private set name(name: string) {
        this._name = name;
        this._sluggifiedName = slugify(this._name);
    }

    get sluggifiedName(): string {
        return this._sluggifiedName;
    }

    private set internal(internal: boolean) {
        this._internal = internal;
    }
    get internal() {
        return this._internal;
    }


    private constructor(address: string | null, Logo: Function, name: string, internal: boolean) {
        this.Logo = Logo;
        this.name = name;
        this.internal = internal;
        this.address = internal ? `/#${this.sluggifiedName}` : String(address);
    }

    public static InternalLink(Logo: Function, name: string): LinkInfo {
        return new this(null, Logo, name, true);
    }
    public static ExternalLink(address: string, Logo: Function, name: string): LinkInfo {
        return new this(address, Logo, name, false);
    }      
}