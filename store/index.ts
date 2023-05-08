import { makeAutoObservable } from "mobx";
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
            shape: shape
        });
        return this.shapesArr;
    }
    getVertices(points) {
        return points.map(point => new THREE.Vector3(...point));
    }
    getShape(vertices) {
        return new THREE.Shape(vertices);
    }
    getOutline(shape) {
        const edges = new THREE.EdgesGeometry(shape);
        return new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
            color: 0xffffff
        }));
    }
}

export const shapeStore = new ShapeStore();
