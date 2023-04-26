import { Component } from 'react';
import { ClosestPointTool, MoveTool, SelectTool } from "../tools";
import { Triangle, Square, Hexagon } from "../shapes";

export class ToolBar extends Component<any, any> {
    render() {
        return <div className="toolbar">
            <div className="tools">
                {/*TODO auto-import tools*/}
                <ClosestPointTool />
                <MoveTool />
                <SelectTool />
            </div>
            <div className="shapes">
                <Triangle />
                <Square />
                <Hexagon />
            </div>
        </div>
    }
}