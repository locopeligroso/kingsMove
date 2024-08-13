import { SoftShadows } from "@react-three/drei"

export default function Illumination() {
    return <>
        <SoftShadows size={25} focus={50} samples={10} />
        <fog attach="fog" args={["white", 0, 40]} />
        <ambientLight intensity={2} />
        <directionalLight castShadow position={[2.5, 8, 5]} intensity={20} shadow-mapSize={1024}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
        </directionalLight>
    </>

}