import { AbstractShape } from './AbstractShape';
import { FaSquareFull } from "react-icons/fa";

export class Square extends AbstractShape {
    shape = [[-0.75, 0.75], [0.75, 0.75], [0.75, -0.75], [-0.75, -0.75]];
    title = "Add Square";
    constructor(props) {
        super(props);
        return this;
    }

    iconElement() {
        return <FaSquareFull />;
    }
}