"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(x, y, width, height) {
        super(x, y);
        this._width = width;
        this._height = height;
    }
    area() {
        return this._width * this._height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    set width(value) {
        this._width = value;
    }
    set height(value) {
        this._height = value;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map