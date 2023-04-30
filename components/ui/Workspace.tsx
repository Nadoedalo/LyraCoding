import {Component, useLayoutEffect, useMemo, useRef, useState, useEffect} from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { shapeStore } from "../../store";
import { observer } from "mobx-react-lite";
import { useDrag, useMove } from "@use-gesture/react";

import * as THREE from "three";

const MeshArrView = observer(({ store }: {store: shapeStore}) => {
    return (<group>
        {
            store.shapesArr.map((shapeObj, shapeIndex) => (
                <MeshView shape={shapeObj} index={shapeIndex} />
            ))
        }
    </group>);
}, {
    forwardRef: true
});

const MeshView = ({ shape, shapeIndex }) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [position, setPosition] = useState([0, 0, 0]);
    const geometry = useRef();
    const outline = useRef();
    const dragBind = useDrag(({ offset: [x, y]}) => {
        setPosition([x, -y, 0]);
    }, {});
    useLayoutEffect(() => {
        if(outline.current && geometry.current) {
            outline.current.geometry = new THREE.EdgesGeometry(geometry.current);
            console.log(outline.current);
        }
    }, [geometry])
    return (<group>
            <mesh
                position={position}
                key={shapeIndex}
                {...dragBind()}
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
    </group>)
}

const MousePointer = ({ mousePosition, ray }) => {
    const { size, camera, scene } = useThree();
    const mouse = new THREE.Vector2();
    const target = new THREE.Vector3();
    const mouseCircle = useRef();
    const position = useMemo(() => {
        if(mousePosition) {
            const {values: [x, y]} = mousePosition;
            return [
                x - size.width / 2 - size.left,
                -y + size.height / 2 + size.top,
                1
            ];
        }
        return [0,0,0]
    }, [mousePosition]);
    useEffect(() => {
        const [x, y] = position;
        mouse.x = x;
        mouse.y = y;

        if (!ray) return;
        ray.setFromCamera(mouse, camera);
        console.log('here scene', scene);
        shapeStore.verticesArr.forEach((vertices) => {
            const length = vertices.length;
            let i = 0;
            for(; i < length; i++) {
                const currentVertex = vertices[i];
                const nextVertex = vertices[i + 1] || vertices[0];
                
                const point = ray.ray.distanceSqToSegment(currentVertex, nextVertex, target);
                console.log('here point', point, target);
            }
        })
    }, [ray, mousePosition, shapeStore.verticesArr]);
    return <mesh ref={mouseCircle}>
        <circleGeometry args={[5, 12]} />
        <meshBasicMaterial color="#000000" side={THREE.DoubleSide}/>
    </mesh>;
}

export const Workspace = () => {
    const [mousePosition, setMousePosition] = useState();
    const ray = useRef();
    const bind = useMove((e) => {
        setMousePosition(e);
    }, {});

    return <div className="workspace">
        <Canvas orthographic {...bind()}>
            <MeshArrView store={shapeStore} />
            <MousePointer mousePosition={mousePosition} ray={ray.current} />
            <raycaster
                ref={ray}
            ></raycaster>
        </Canvas>
    </div>;
}