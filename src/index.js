"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pos = void 0;
class Pos {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /**
     * Clones the current object.
     * @returns New position object with the same current position.
     */
    clone() {
        return new Pos(this.x, this.y);
    }
    /**
     * Clones the current object, then adds X
     * @param x The X value to add.
     * @returns New position object with the added X position.
     */
    addX(x) {
        const clone = this.clone();
        clone.x += x;
        return clone;
    }
    /**
     * Clones the current object, then adds Y
     * @param y The Y value to add.
     * @returns New position object with the added Y position.
     */
    addY(y) {
        const clone = this.clone();
        clone.y += y;
        return clone;
    }
    add(x, y) {
        if (x instanceof Pos) {
            return this.addX(x.x).addY(x.y);
        }
        else {
            return this.addX(x).addY(y || 0);
        }
    }
    /**
     * Formats the position object into a string.
     * @returns Formatted version of the position.
     */
    toString() {
        return `X: ${this.x} Y: ${this.y}`;
    }
}
exports.Pos = Pos;