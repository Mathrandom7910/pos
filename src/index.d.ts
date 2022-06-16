export declare class PrimitivePos {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    /**
     * @returns A normal clone of the current position object, (non primitive).
     */
    normalize(): Pos;
}
export declare class Pos extends PrimitivePos {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    /**
     * Clones the current object.
     * @returns New position object with the same current position.
     */
    clone(): Pos;
    /**
     * Clones the current object, then adds X
     * @param x The X value to add.
     * @returns New position object with the added X position.
     */
    addX(x: number): Pos;
    /**
     * Clones the current object, then adds Y
     * @param y The Y value to add.
     * @returns New position object with the added Y position.
     */
    addY(y: number): Pos;
    /**
     * Clones the current object, then adds the position
     * @param x The X value to add.
     * @param y The Y value to add.
     * @returns New position object with the added X and Y position.
     */
    add(x: number, y: number): Pos;
    add(pos: Pos): Pos;
    /**
     * Formats the position object into a string.
     * @returns Formatted version of the position.
     */
    toString(): string;
    /**
     * @returns A primitive clone of the current object.
     */
    asPrimitive(): PrimitivePos;
    /**
     * Sets the x and y properties to the given position object's.
     * @param pos The given position object.
     * @returns The updated current position.
     */
    set(pos: Pos): this;
    /**
     * Gets distance between the two positional objects.
     * @param pos Position to calculate distance to.
     * @returns Distance calculated.
     */
    dist(pos: Pos): number;
    /**
     * Gets direction from the current object to the second object.
     * @param pos Position to calculate direction to.
     * @returns Direction (in radians) calculated.
     */
    dirTo(pos: Pos): number;
}
