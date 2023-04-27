import { Component } from 'react';
import { shapeStore } from "../../store";

const hexagon = [[-100, 0], [-50, 80], [50, 80], [100, 0], [50, -80], [-50, -80]];

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