import { Component } from 'react';
import { shapeStore } from "../../store";
import { observer } from "mobx-react";
@observer export class AbstractShape extends Component<any, any> {
    shape = [[0,0]];
    title = ''; // title to display to the user
    constructor(props) {
        super(props);
        return this;
    }

    addShape() {
        shapeStore.addShape(this.shape);
    }
    render() {
        return <span onClick={() => this.addShape()} title={this.title}>
            { this.iconElement() }
        </span>;
    }
    iconElement() { // React Icon element
        return <></>;
    }
}