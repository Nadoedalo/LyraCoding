import { Component, useMemo } from 'react';
import { Canvas,  } from "@react-three/fiber";
import { shapeStore } from "../../store";
import { observer } from "mobx-react-lite";

const MeshView = observer(({ store }: {store: shapeStore}) => {
    console.log('here render??', store.shapesArr, store.shapesArr[0]);
    return (<>
        {
            store.shapesArr.map((shape, shapeIndex) => (
                <mesh key={shapeIndex}>
                    <shapeGeometry args={[shape]} />
                    <meshBasicMaterial color="green"/>
                </mesh>
            ))
        }
    </>);
}, {
    forwardRef: true
});

export class Workspace extends Component<any, any> {
    render() {
        return <div className="workspace">
            <Canvas orthographic>
                <MeshView store={shapeStore} />
            </Canvas>
        </div>;
    }
}