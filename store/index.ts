import { makeAutoObservable } from "mobx";
import { ToolStore } from "./ToolStore";
import * as THREE from "three";

class ShapeStore {
    pointsArr = [];
    shapesArr = [];
    verticesArr = [];
    mousePos = { x: 0, y : 0 };

    constructor() {
        makeAutoObservable(this);
        return this;
    }

    addShape(coordinates) {
        this.pointsArr.push(coordinates);
        const vertices = this.getVertices(coordinates);
        this.verticesArr.push(vertices);
        const shape = this.getShape(vertices);
        this.shapesArr.push({
            shape: shape,
            active: false,
        });
        return this.shapesArr;
    }
    getVertices(points) {
        return points.map(point => new THREE.Vector3(...point));
    }
    getShape(vertices) {
        return new THREE.Shape(vertices);
    }
    selectShape(shape) {
        this.deactivateShapes();
        shape.active = true;
    }
    deactivateShapes() {
        // currently only one shape can be active
        const activeShape = this.shapesArr.find(shape => shape.active);
        if(activeShape) {
            activeShape.active = false;
        }
    }
}

export const shapeStore = new ShapeStore();
export const toolStore = new ToolStore();