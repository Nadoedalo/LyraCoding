import { AbstractTool } from "./AbstractTool";
import { GiArrowCursor } from "react-icons/gi";
import { toolsConfig } from "../../configs/tools.config";

export class SelectTool extends AbstractTool {
    title = 'Select Tool';
    name = toolsConfig.SELECT_TOOL;
    constructor(props) {
        super(props);
        this.activateTool();
        return this;
    }
    iconElement(): JSX.Element {
        return <GiArrowCursor />
    }
}