import { AbstractTool } from "./AbstractTool";
import { BiExport } from "react-icons/bi";
import { toolsConfig } from "../../configs/tools.config";
import { shapeStore } from "../../store";

export class ExportTool extends AbstractTool {
    title = 'Export to console';
    name = toolsConfig.EXPORT_TOOL;
    constructor(props) {
        super(props);
        return this;
    }
    iconElement(): JSX.Element {
        return <BiExport />
    }
    activateTool() {
        console.log(shapeStore.export());
    }
}