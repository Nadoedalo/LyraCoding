import renderer from 'react-test-renderer';
import { describe, expect, it } from "@jest/globals";
import { MoveTool } from "../../../components/tools/MoveTool";

describe('ToolBar Snapshot', () => {
    const moveTool = renderer.create(<MoveTool />,);

    it("Should match Snapshot", () => {
        let tree = moveTool.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("Changes class when activated", () => {
        renderer.act(() => {
            moveTool.root.instance.activateTool();
        });
        let tree = moveTool.toJSON();
        expect(tree).toMatchSnapshot();
    })

})