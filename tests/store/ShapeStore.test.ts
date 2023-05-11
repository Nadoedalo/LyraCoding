import { ShapeStore } from "../../store/ShapeStore";
import { describe, it, expect } from '@jest/globals';
import * as THREE from "three";

describe('ToolStore Module', () => {
    const shapeStore = new ShapeStore();
    const points = [[0,0], [1,1], [2,2]];
    const position = [1,1,1];
    const newPosition = [2,2,2];
    it("Should initialize correctly", () => {
        expect(shapeStore.pointsArr).toStrictEqual([]);
        expect(shapeStore.positionArr).toStrictEqual([]);
        expect(shapeStore.verticesArr).toStrictEqual([]);
        expect(shapeStore.shapesArr).toStrictEqual([]);
    });

    it("Should support adding Shape", () => {
        const shapesArr = shapeStore.addShape(points,position);
        expect(shapesArr.length).toBe(1);
        expect(shapeStore.pointsArr).toStrictEqual([points]);
        expect(shapeStore.positionArr).toStrictEqual([position]);
        expect(shapeStore.verticesArr.length).toBe(1);
        expect(shapeStore.verticesArr[0].length).toBe(3);
        expect(shapeStore.verticesArr[0][0]).toBeInstanceOf(THREE.Vector3);
        expect(shapesArr[0].active).toBe(false);
        expect(shapesArr[0].shape).toBeInstanceOf(THREE.Shape);
    });

    it("Should properly select & deselect shapes", () => {
        /*Selecting shapes test*/
        const shapesArr = shapeStore.addShape(points,position);
        shapeStore.selectShape(shapesArr[0]);
        expect(shapesArr[0].active).toBe(true);
        expect(shapesArr[1].active).toBe(false);
        shapeStore.selectShape(shapesArr[1]);
        expect(shapesArr[0].active).toBe(false);
        expect(shapesArr[1].active).toBe(true);
    });

    it("Should properly update position", () => {
        shapeStore.updatePosition(0, newPosition);
        expect(shapeStore.positionArr[0]).toStrictEqual(newPosition);
    })

    it("Should properly export shapes", () => {
        const shapeStoreExport = shapeStore.export();
        expect(shapeStoreExport).toStrictEqual(JSON.stringify({
            points: [points, points],
            position: [newPosition, position]
        }));
    });

});