import { Component } from 'react';
import { shapeStore } from "../../store";

const square = [[-0.75, 0.75], [0.75, 0.75], [0.75, -0.75], [-0.75, -0.75]];

export class Square extends Component<any, any> {
    addSquare() {
        shapeStore.addShape(square);
    }
    render() {
        return <>
            <span onClick={this.addSquare}>Square</span>
        </>;
    }
}