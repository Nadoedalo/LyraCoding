import { AbstractTool } from "./AbstractTool";
import { BiMoveHorizontal } from "react-icons/bi";
import { toolsConfig } from "../../configs/tools.config";

export class ClosestPointTool extends AbstractTool {
    title = 'Closest Point';
    name = toolsConfig.CLOSEST_POINT_TOOL;
    constructor(props) {
        super(props);
        return this;
    }
    iconElement(): JSX.Element {
        return <BiMoveHorizontal />
    }
}