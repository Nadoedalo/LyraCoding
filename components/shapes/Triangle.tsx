import { AbstractShape } from './AbstractShape';
import { BsTriangleFill } from "react-icons/bs";

export class Triangle extends AbstractShape {
    shape = [[0, 1], [0.75, 0], [-0.75, 0]];
    title = "Add Triangle";
    constructor(props) {
        super(props);
        return this;
    }

    iconElement() {
        return <BsTriangleFill />;
    }
}