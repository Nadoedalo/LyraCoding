import { makeAutoObservable } from "mobx";
import { ToolStore } from "./ToolStore";
import * as THREE from "three";

class ShapeStore {
    pointsArr = []; // array of basic points for the shapes
    positionArr = []; // array of position set by user dragging
    verticesArr = []; // derivative array of THREE.Vector3 built by points
    shapesArr = []; // derivative array of THREE.Shape build by vertices

    constructor() {
        makeAutoObservable(this);
        return this;
    }

    /**
     * Basic method of adding a new shape to the array
     * Creates all the necessary structures and provides access by index
     * TODO shape removal?
     * */
    addShape(points, position = [0, -0, 0]) {
        this.pointsArr.push(points);
        const vertices = this.getVertices(points);
        this.positionArr.push(position);
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
    updatePosition(index, position) {
        this.positionArr[index] = position;
    }
    /**
     * provides all the data necessary to reconstruct exact state of the application
     * TODO import?
     * */
    export() {
        return JSON.stringify({
            points: this.pointsArr,
            position: this.positionArr,
        })
    }
}

export const shapeStore = new ShapeStore();
export const toolStore = new ToolStore();