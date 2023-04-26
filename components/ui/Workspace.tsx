import { Component, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas,  } from "@react-three/fiber";
import { shapeStore } from "../../store";

export class Workspace extends Component<any, any> {
    points = [[-100, 100], [100, 100], [100, -100], [-100, -100]]
    verticies() {
        return this.points.map(point => new THREE.Vector2(...point));
    }
    someShape() {
        return new THREE.Shape(this.verticies());
    }
    render() {
        return <div className="workspace">
            <Canvas orthographic>
                <mesh>
                    <shapeGeometry args={[this.someShape()]}>
                    </shapeGeometry>
                    <meshBasicMaterial color="green" wireframe/>
                    {/*{
                        shapeStore.shapesArr.map((el) => (
                                <>Test {el}</>
                            )
                        )
                    }*/}
                </mesh>
            </Canvas>
        </div>;
    }
}