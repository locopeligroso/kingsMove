import { useEffect, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Perf } from "r3f-perf"

import Illumination from "./Components/3D/Illumination"
import Floor from "./Components/3D/Floor"
import PlaceHolderScene from "./Components/3D/PlaceHolderScene"
import Chessboard from "./Components/3D/ChessBoard"

export default function App() {
  
    return <>
        {/* <Perf position="bottom-left" /> */}

        <Illumination />
        {/* <PlaceHolderScene /> */}
        <Chessboard />
        <Floor position={[0, 0, 0]} />

    </>
}
