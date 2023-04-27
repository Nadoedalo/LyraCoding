import { makeAutoObservable } from "mobx";
import * as THREE from "three";
class ShapeStore {
    pointsArr = [];
    shapesArr = [];
    mousePos = { x: 0, y : 0 };

    constructor() {
        makeAutoObservable(this);
        return this;
    }

    addShape(coordinates) {
        this.pointsArr.push(coordinates);
        const vertices = this.getVertices(coordinates);
        this.shapesArr.push(this.getShape(vertices));
        return this.shapesArr;
    }
    getVertices(points) {
        return points.map(point => new THREE.Vector2(...point));
    }
    getShape(vertices) {
        return new THREE.Shape(vertices);
    }
}

export const shapeStore = new ShapeStore();
