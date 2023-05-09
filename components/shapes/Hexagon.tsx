import { AbstractShape } from './AbstractShape';
import { MdHexagon } from "react-icons/md";

export class Hexagon extends AbstractShape {
    shape = [[-1, 0], [-0.5, 0.8], [0.5, 0.8], [1, 0], [0.5, -0.8], [-0.5, -0.8]];
    title = "Add Hexagon";
    constructor(props) {
        super(props);
        return this;
    }

    iconElement() {
        return <MdHexagon />;
    }
}