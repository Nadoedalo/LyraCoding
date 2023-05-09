import { observer } from "mobx-react-lite";
import { shapeStore } from "../../../store";
import { useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useDrag } from "@use-gesture/react";
import { MousePointer } from ".";
import { toolStore } from "../../../store";
import { toolsConfig } from "../../../configs/tools.config";

/**
 * The main collection to draw all the meshes with various shapes
 * Access through shapeIndex enables O(1) access to all the attributes of the shape in the store
 * */
export const MeshCollection = observer(({ store }: { store: shapeStore }) => {
    return (<group>
        {
            store.shapesArr.map((shapeObj, shapeIndex) => (
                <MeshView shape={shapeObj} index={shapeIndex} key={shapeIndex}/>
            ))
        }
    </group>);
});

/**
 * The main Mesh View. Could be in different module but MeshCollection doesn't have a lot of logic yet
 * Does:
 * Selecting, Dragging
 * And supposedly should provide support elements for Closest Point Tool
 * *///observer(({index, shape, shapeIndex, ray})) => {
const MeshView = observer(({ shape, index }) => {
    const {size, viewport} = useThree()
    const aspect = size.width / viewport.width
    const [hover, setHover] = useState(false);
    const [position, setPosition] = useState([0, 0, 0]);
    const geometry = useRef();
    const mesh = useRef();
    const outline = useRef();
    const plane = useRef();
    const raycaster = useRef();
    const dot = new THREE.Vector3(0, 0, 1);
    const dragBind = useDrag((state) => {
        state.event.stopPropagation();
        if(toolStore.activeTools[toolsConfig.MOVE_TOOL]) {
            const {offset: [x, y]} = state;
            setPosition([x / aspect, -y / aspect, 0]);
        }
    }, {});
    useLayoutEffect(() => {
        if (outline.current && geometry.current) {
            outline.current.geometry = new THREE.EdgesGeometry(geometry.current);
        }
    }, [geometry])
    return (<group position={position}>
        <mesh
            key={index}
            {...dragBind()}
            onClick={(e) => {
                e.stopPropagation();
                if(toolStore.activeTools[toolsConfig.SELECT_TOOL]) {
                    shapeStore.selectShape(shape);
                }
            }}
            onPointerOver={(e) => { // FIXME: Glitchy because it isn't tied through Raycaster but it should
                e.stopPropagation();
                if (!hover) {
                    setHover(true)
                }
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                if (hover) {
                    setHover(false)
                }
            }}
            ref={mesh}

        >
            <shapeGeometry args={[shape.shape]} ref={geometry}/>
            <meshBasicMaterial
                color={hover ? '#009900' : '#BEBEBE'}
            />
        </mesh>
        <mesh>
            <lineSegments ref={outline}>
                <meshBasicMaterial color="#000000" visible={shape.active}/>
            </lineSegments>
        </mesh>
        <raycaster
            ref={raycaster}
        ></raycaster>
        <plane args={[dot, 0]} ref={plane}/>
        <MousePointer
            mesh={mesh.current}
            plane={plane.current}
            raycaster={raycaster.current}
            index={index}
        />
    </group>)
})