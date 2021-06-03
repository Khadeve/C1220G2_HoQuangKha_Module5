import { Shape } from "./shape";
export declare class Rectangle extends Shape implements IArea {
    private _width;
    private _height;
    constructor(x: number, y: number, width: number, height: number);
    area(): number;
    get width(): number;
    get height(): number;
    set width(value: number);
    set height(value: number);
}
