import { Component } from 'react';
import { toolStore } from "../../store";
import { observer } from "mobx-react";
@observer export class AbstractTool extends Component<any, any> {
    name = ''; // an ID of the tool, camelCase
    title = ''; // title to display to the user
    constructor(props) {
        super(props);
        return this;
    }

    activateTool() {
        toolStore.toggleTool(this.name);
    }
    get classNames() {
        const classNames = [];
        if(toolStore.activeTools[this.name]) {
            classNames.push('active');
        }
        return classNames.join(' ');
    }
    render() {
        return <span onClick={() => this.activateTool()} title={this.title} className={this.classNames}>
            { this.iconElement() }
        </span>;
    }
    iconElement() { // React Icon element
        return <></>;
    }
}