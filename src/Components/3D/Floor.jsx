export default function Floor({ position }) {

    return <>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={position} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.4} />
        </mesh>
    </>
}
