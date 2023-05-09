import { Component, createElement } from 'react';
import { shapes } from "../shapes";
import { tools } from "../tools";

/**
 * Just a toolbar with auto-imported tools
 * */
export class ToolBar extends Component<any, any> {
    render() {
        return <div className="toolbar">
            <div className="tools">
                {
                    tools.map((tool) => {
                            return createElement(tool, { key: tool.name });
                        }
                    )
                }
            </div>
            <div className="shapes">
                {
                    shapes.map((shape) => {
                            return createElement(shape, { key: shape.name });
                        }
                    )
                }
            </div>
        </div>
    }
}