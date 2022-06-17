import { getAngle, getDistance } from "@mathrandom7910/mathplus";

export class PrimitivePos {
    constructor(public x = 0, public y = 0) {

    }

    /**
     * @returns A normal clone of the current position object, (non primitive).
     */

    normalize() {
        return new Pos(this.x, this.y);
    }
}

export class Pos extends PrimitivePos {
    constructor(public x = 0, public y = 0) {
        super(x, y);
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

    /**
     * @returns A primitive clone of the current object.
     */

    asPrimitive() {
        return new PrimitivePos(this.x, this.y);
    }

    /**
     * Sets the x and y properties to the given position object's.
     * @param pos The given position object.
     * @returns The updated current position.
     */

    set(pos: Pos) {
        this.x = pos.x;
        this.y = pos.y;
        return this;
    }

    /**
     * Gets distance between the two positional objects.
     * @param pos Position to calculate distance to.
     * @returns Distance calculated.
     */

    dist(pos: Pos): number {
        return getDistance(this, pos);
    }

    /**
     * Gets direction from the current object to the second object.
     * @param pos Position to calculate direction to.
     * @returns Direction (in radians) calculated.
     */

    dirTo(pos: Pos) {
        return getAngle(this, pos);
    }

    equals(pos: Pos) {
        return this.x == pos.x && this.y == pos.y;
    }
}
