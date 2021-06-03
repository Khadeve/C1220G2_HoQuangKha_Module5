import { Shape } from "./shape";

export class Rectangle extends Shape implements IArea {
    private _width: number;
    private _height: number;


	constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
		this._width = width;
		this._height = height;
	}

    area(): number {
        return this._width * this._height;
    }

    /**
     * Getter width
     * @return {number}
     */
	public get width(): number {
		return this._width;
	}

    /**
     * Getter height
     * @return {number}
     */
	public get height(): number {
		return this._height;
	}

    /**
     * Setter width
     * @param {number} value
     */
	public set width(value: number) {
		this._width = value;
	}

    /**
     * Setter height
     * @param {number} value
     */
	public set height(value: number) {
		this._height = value;
	}
}