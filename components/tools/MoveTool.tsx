import { AbstractTool } from "./AbstractTool";
import { BiMove } from "react-icons/bi";
import { toolsConfig } from "../../configs/tools.config";

export class MoveTool extends AbstractTool {
    title = 'Move Tool';
    name = toolsConfig.MOVE_TOOL;
    constructor(props) {
        super(props);
        this.activateTool();
        return this;
    }
    iconElement(): JSX.Element {
        return <BiMove />
    }
}