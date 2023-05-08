import { Canvas } from "@react-three/fiber";
import { shapeStore } from "../../store";
import { MeshCollection } from "./components";

export const Workspace = () => {

    return <div className="workspace">
        <Canvas>
            <MeshCollection store={shapeStore} />
        </Canvas>
    </div>;
}