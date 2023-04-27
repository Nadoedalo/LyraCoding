import { Component } from 'react';
import { shapeStore } from "../../store";

const square = [[-75, 75], [75, 75], [75, -75], [-75, -75]];

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