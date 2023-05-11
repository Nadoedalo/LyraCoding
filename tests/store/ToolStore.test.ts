import { ToolStore } from "../../store/ToolStore";
import { describe, it, expect } from '@jest/globals';
import { toolsConfig } from "../../configs/tools.config";

describe('ToolStore Module', () => {
    const toolStore = new ToolStore();
    it("Should have activeTools HashMap", () => {
        expect(toolStore.activeTools).toStrictEqual({});
    });
    it("Should toggle tools on & off", () => {
        const tool = toolsConfig.MOVE_TOOL;
        toolStore.toggleTool(tool);
        expect(toolStore.activeTools[tool]).toBe(true);
        toolStore.toggleTool(tool);
        expect(toolStore.activeTools[tool]).toBe(false);
    });
});