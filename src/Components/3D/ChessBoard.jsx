import { MeshLambertMaterial, BoxGeometry, Mesh } from "three"


const cube = new Mesh(
    new BoxGeometry(2, 0.2, 2),
    new MeshLambertMaterial()
)

export default function ChessBoard() {

    return <>
        <group position={[-5, 0, 0]}>
            {
                [...Array(8)].map((_, i) => {
                    const isWhite = i % 2 === 0;
                    const color = isWhite ? 'white' : 'grey';
                    return (
                        <mesh
                            key={i}
                            position={[i * 2, 0.1, 0]}
                            castShadow
                            receiveShadow
                        >
                            <boxGeometry attach="geometry" args={[2, 0.2, 2]} />
                            <meshStandardMaterial color={color} metalness={0}/>
                        </mesh>
                    );
                })
            }
        </group>
    </>
}