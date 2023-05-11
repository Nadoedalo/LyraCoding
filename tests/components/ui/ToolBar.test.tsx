import renderer from 'react-test-renderer';
import { describe, expect, it } from "@jest/globals";
import { ToolBar } from "../../../components/ui";

describe('ToolBar Snapshot', () => {
    const toolBar = renderer.create(<ToolBar />,);
    let tree = toolBar.toJSON();
    it("Should match Snapshot", () => {
        expect(tree).toMatchSnapshot();
    })
})