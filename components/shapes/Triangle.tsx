import { Component } from 'react';
import { shapeStore } from "../../store";

const triangle = [[0, 100], [75, 0], [-75, 0]];

export class Triangle extends Component<any, any> {
    addTriangle() {
        shapeStore.addShape(triangle);
        return false;
    }
    render() {
        return <>
            <span onClick={this.addTriangle}>Triangle</span>
        </>;
    }
}