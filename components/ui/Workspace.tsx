import {Component, useLayoutEffect, useMemo, useRef, useState} from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { shapeStore } from "../../store";
import { observer } from "mobx-react-lite";
import { useDrag } from "@use-gesture/react";

import * as THREE from "three";

const MeshArrView = observer(({ store }: {store: shapeStore}) => {
    return (<>
        {
            store.shapesArr.map((shapeObj, shapeIndex) => (
                <MeshView shape={shapeObj} index={shapeIndex} />
            ))
        }
    </>);
}, {
    forwardRef: true
});

const MeshView = ({ shape, shapeIndex }) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [position, setPosition] = useState([0, 0, 0]);
    const geometry = useRef();
    const outline = useRef();
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    const bind = useDrag(({ offset: [x, y]}) => {
        const [, , z] = position;
        setPosition([x / aspect, -y / aspect, z]);
    });
    useLayoutEffect(() => {
        if(outline.current && geometry.current) {
            outline.current.geometry = new THREE.EdgesGeometry(geometry.current);
        }
    }, [geometry])
    return (<>
            <mesh
                position={position}
                key={shapeIndex}
                {...bind()}
                onClick={() => setActive(!active)}
                onPointerOver={() => {if(!hover) { setHover(true) }}}
                onPointerOut={() => {if(hover) { setHover(false) }}}
            >
                <shapeGeometry args={[shape.shape]} ref={geometry}/>
                <meshBasicMaterial
                    color={ hover ? '#009900' : '#BEBEBE' }
                />
            </mesh>
            <mesh
                position={position}
            >
                <lineSegments ref={outline}>
                    <meshBasicMaterial color="#000000" visible={active}/>
                </lineSegments>
            </mesh>
    </>)
}

export class Workspace extends Component<any, any> {
    render() {
        return <div className="workspace">
            <Canvas orthographic>
                <MeshArrView store={shapeStore} />
            </Canvas>
        </div>;
    }
}