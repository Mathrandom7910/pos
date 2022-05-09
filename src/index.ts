export class Pos {
    constructor(public x = 0, public y = 0) {

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

    addX(x: number) {
        const clone = this.clone();
        clone.x += x;
        return clone;
    }

    /**
     * Clones the current object, then adds Y
     * @param y The Y value to add.
     * @returns New position object with the added Y position.
     */

    addY(y: number) {
        const clone = this.clone();
        clone.y += y;
        return clone;
    }

    /**
     * Clones the current object, then adds the position
     * @param x The X value to add.
     * @param y The Y value to add.
     * @returns New position object with the added X and Y position.
     */
    add(x: number, y: number): Pos;

    add(pos: Pos): Pos;

    add(x: number | Pos, y?: number) {
        if(x instanceof Pos){
            return this.addX(x.x).addY(x.y);
        } else {
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
