export declare class PrimitivePos {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
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
    asPrimitive(): PrimitivePos;
}
