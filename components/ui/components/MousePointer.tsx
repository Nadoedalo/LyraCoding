import {useThree} from "@react-three/fiber";
import * as THREE from "three";
import {useEffect, useRef} from "react";

/**
 * TODO: Work In Progress [WIP]
 * The component that should enable the "closest point tool"
 * I've bashed my head with Raycaster but to no avail.
 * Seems that I miss some basic knowledge about Raycasting
 * But this should be the proper way to do it.
 * Tried to replicate this solution https://jsfiddle.net/f2Lommf5/14316/
 * And failed miserably because I get weird point coordinates
 * Currently everything is commented out to leave traces of failed attempts
 * I always felt that I'm pretty close with the solution
 * */
export const MousePointer = ({mesh, plane, raycaster, index}) => {
    const {size, camera, mouse} = useThree();
    const mouseVector = new THREE.Vector2(0, 0);
    const pointOnPlane = new THREE.Vector3();
    const target = new THREE.Vector3();
    let point = new THREE.Vector3(0, 0, 0);
    const mouseCircle = useRef();
    /*    const position = useMemo(() => {
            if(mousePosition) {
                return [(mouse.x * size.width) / 2.5, (mouse.y * size.height) / 2.5, 1];
            }
            return [0,0,1]
        }, [mousePosition]); */
    useEffect(() => {
        if (!raycaster) {
            return;
        }
        /*const [x, y] = position;
        mouseVector.x = x;
        mouseVector.y = y;*/


        // raycaster.setFromCamera(mouseVector, camera);
        // raycaster.ray.intersectPlane(plane, pointOnPlane);

        //mouseCircle.current.position.copy(pointOnPlane);
        //console.log(pointOnPlane);

        /*const triangle = new THREE.Triangle();
        const geometryPosition = mesh.geometry.attributes.position;

        const { count } = geometryPosition;
        let minDistance = Infinity;
        for(let i = 0; i < count; i += 3) {
            const a = geometryPosition.getX(i);
            const b = geometryPosition.getX(i + 1);
            const c = geometryPosition.getX(i + 2);
            triangle.a.fromBufferAttribute( geometryPosition, a );
            triangle.b.fromBufferAttribute( geometryPosition, b );
            triangle.c.fromBufferAttribute( geometryPosition, c );
            triangle.closestPointToPoint( pointOnPlane, target );

            const distanceSq = pointOnPlane.distanceToSquared( target );
            if ( distanceSq < minDistance ) {

                mouseCircle.current.position.copy(target);
                minDistance = distanceSq;

            }
        }*/
        /* let minDistance = Infinity;
        const minPoint = new THREE.Vector3(0,0,0);
        const vertices = shapeStore.verticesArr[index];
        const length = vertices.length;
        console.log('mesh', mesh)
        let i = 0;
        for(; i < length; i++) {
            const currentVertex = vertices[i];
            const nextVertex = vertices[i + 1] || vertices[0];
            const distance = raycaster.ray.distanceSqToSegment(nextVertex, currentVertex, null, minPoint);
            if(distance < minDistance) {
                point = minPoint;
                minDistance = distance;
                console.log('minIndex', i);
            }
        }*/

    }, [mouse]);
    return /*<mesh ref={mouseCircle}>
            <circleGeometry args={[0.05]} />
            <meshBasicMaterial color="#000000" side={THREE.DoubleSide}/>
        </mesh>*/;
}