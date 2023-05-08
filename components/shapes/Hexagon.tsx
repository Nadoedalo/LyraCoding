import { Component } from 'react';
import { shapeStore } from "../../store";

const hexagon = [[-1, 0], [-0.5, 0.8], [0.5, 0.8], [1, 0], [0.5, -0.8], [-0.5, -0.8]];

export class Hexagon extends Component<any, any> {
    addHexagon() {
        shapeStore.addShape(hexagon);
    }
    render() {
        return <>
            <span onClick={this.addHexagon}>Hexagon</span>
        </>;
    }
}