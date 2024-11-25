import { useGLTF } from "@react-three/drei"
import { useAnimations } from "@react-three/drei"
import { useRef } from "react"
import { useEffect } from "react"

const Water = (props)=> {
    const waterRef = useRef()
    const { nodes, materials, animations } = useGLTF("models3d/water.glb")
    const { actions } = useAnimations(animations, waterRef)
    console.log(actions);

    useEffect(() =>{
        actions["Animation"].play();
        return() => actions["Animation"].stop();
    }, [actions]) ;





    return (
      <group ref={waterRef} {...props} dispose={null}>
        <group name="Scene">
          <group
            name="Icosphere005_46"
            position={[1.954, 0.043, 4.854]}
            rotation={[0, 0, 1.227]}
            scale={0.761}
          />
          <group
            name="Icosphere007_48"
            position={[-1.035, 0.142, 4.895]}
            rotation={[-Math.PI, -1.52, -1.914]}
            scale={0.761}
          />
          <group
            name="Icosphere008_49"
            position={[4.4, 0.236, 5.174]}
            rotation={[-2.807, -0.319, -1.618]}
            scale={0.472}
          />
          <group
            name="Icosphere011_52"
            position={[-4.761, 0.236, 5.174]}
            rotation={[-2.807, -0.319, -1.618]}
            scale={0.472}
          />
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Empty001_91" position={[-2.008, -2.24, 0.103]} rotation={[0, 0.026, 0]}>
                  <group
                    name="Circle001_9"
                    position={[1.5, 6.84, -1.644]}
                    rotation={[2.231, -0.106, 2.941]}
                    scale={0.63}>
                    <mesh
                      name="Object_8"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_8.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Circle_8"
                    position={[2.172, 6.793, 1.585]}
                    rotation={[0.928, -0.027, 0.008]}
                    scale={0.63}>
                    <mesh
                      name="Object_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_6.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube001_11" position={[2.008, 6.031, -0.082]}>
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube002_12" position={[2.008, 3.237, -0.103]}>
                    <mesh
                      name="Object_14"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_14.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube003_13" position={[2.008, 3.237, -0.181]}>
                    <mesh
                      name="Object_16"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_16.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube004_14" position={[2.008, 6.031, -0.082]}>
                    <mesh
                      name="Object_18"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_18.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube005_15"
                    position={[1.909, 6.031, -0.029]}
                    rotation={[-Math.PI, 1.469, -Math.PI]}>
                    <mesh
                      name="Object_20"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_20.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube006_16"
                    position={[1.969, 6.031, -0.05]}
                    rotation={[Math.PI, -0.123, Math.PI]}>
                    <mesh
                      name="Object_22"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_22.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube007_17" position={[2.019, 6.031, 0.045]} rotation={[0, -1.433, 0]}>
                    <mesh
                      name="Object_24"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_24.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube008_18" position={[2.008, 6.031, -0.082]}>
                    <mesh
                      name="Object_26"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_26.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube009_19" position={[2.057, 2.302, 0.929]}>
                    <mesh
                      name="Object_28"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_28.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube010_20"
                    position={[2.153, 6.673, 1.428]}
                    rotation={[-0.637, 0.053, 0.173]}>
                    <mesh
                      name="Object_30"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_30.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube011_21"
                    position={[1.572, 6.72, -1.478]}
                    rotation={[-2.458, -0.253, -2.867]}>
                    <mesh
                      name="Object_32"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_32.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube012_22" position={[3.646, 6.842, -0.021]}>
                    <mesh
                      name="Object_34"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_34.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube013_23" position={[0.999, 2.224, -0.105]}>
                    <mesh
                      name="Object_36"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_36.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube014_24"
                    position={[2.956, 2.224, -0.088]}
                    rotation={[-Math.PI, 0.019, -Math.PI]}>
                    <mesh
                      name="Object_38"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_38.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube015_25" position={[2.071, 2.367, 1.5]} rotation={[0, -0.136, 0]}>
                    <mesh
                      name="Object_40"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_40.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube016_26" position={[2.122, 2.126, 2.058]} rotation={[0, -0.116, 0]}>
                    <mesh
                      name="Object_42"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_42.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube017_27" position={[1.958, 2.16, 2.59]} rotation={[0, -0.522, 0]}>
                    <mesh
                      name="Object_44"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_44.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube018_28" position={[1.894, 1.634, 3.033]} rotation={[0, -0.747, 0]}>
                    <mesh
                      name="Object_46"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_46.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube019_29" position={[1.616, 1.576, 3.21]} rotation={[0, -1.056, 0]}>
                    <mesh
                      name="Object_48"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_48.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube020_30" position={[1.294, 1.171, 3.535]} rotation={[0, -1.263, 0]}>
                    <mesh
                      name="Object_50"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_50.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube021_31" position={[-3.124, 1.364, 1.36]}>
                    <mesh
                      name="Object_52"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_52.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube022_32" position={[-2.522, 1.364, 1.069]} rotation={[0, 0.714, 0]}>
                    <mesh
                      name="Object_54"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_54.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube023_33" position={[-2.263, 1.364, 0.515]} rotation={[0, 1.366, 0]}>
                    <mesh
                      name="Object_56"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_56.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube024_34"
                    position={[-2.44, 1.364, -0.153]}
                    rotation={[-Math.PI, 1.036, -Math.PI]}>
                    <mesh
                      name="Object_58"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_58.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube025_35"
                    position={[-2.934, 1.364, -0.506]}
                    rotation={[-Math.PI, 0.39, -Math.PI]}>
                    <mesh
                      name="Object_60"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_60.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube026_36"
                    position={[-3.587, 1.364, -0.471]}
                    rotation={[Math.PI, -0.309, Math.PI]}>
                    <mesh
                      name="Object_62"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_62.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube027_37"
                    position={[-4.069, 1.364, -0.016]}
                    rotation={[Math.PI, -1.017, Math.PI]}>
                    <mesh
                      name="Object_64"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_64.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube028_38"
                    position={[-4.142, 1.364, 0.633]}
                    rotation={[0, -1.427, 0]}>
                    <mesh
                      name="Object_66"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_66.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube029_39"
                    position={[-3.775, 1.364, 1.182]}
                    rotation={[0, -0.721, 0]}>
                    <mesh
                      name="Object_68"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_68.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube_10" position={[2.008, 3.237, -0.103]}>
                    <mesh
                      name="Object_10"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cylinder_40" position={[-3.329, 1.819, -1.162]}>
                    <mesh
                      name="Object_70"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_70.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere001_42"
                    position={[-3.236, 1.739, -2.663]}
                    rotation={[0, 0.905, 0]}
                    scale={1.087}>
                    <mesh
                      name="Object_74"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_74.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere002_43"
                    position={[0.808, 1.423, -2.95]}
                    rotation={[-0.905, 0.002, 1.569]}
                    scale={1.349}>
                    <mesh
                      name="Object_76"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_76.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere003_44"
                    position={[3.582, 1.245, 3.548]}
                    rotation={[0, 0, 1.227]}
                    scale={0.761}>
                    <mesh
                      name="Object_78"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_78.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere004_45"
                    position={[-3.024, 1.82, 3.911]}
                    rotation={[-Math.PI, 1.133, -Math.PI]}
                    scale={1.603}>
                    <mesh
                      name="Object_80"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_80.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere005_46001"
                    position={[1.954, 0.043, 4.854]}
                    rotation={[0, 0, 1.227]}
                    scale={0.761}>
                    <mesh
                      name="Object_82"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_82.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere006_47"
                    position={[4.844, 0.431, 3.777]}
                    rotation={[0, 0, 1.227]}
                    scale={0.761}>
                    <mesh
                      name="Object_84"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_84.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere007_48001"
                    position={[-1.035, 0.142, 4.895]}
                    rotation={[Math.PI, -1.52, -1.914]}
                    scale={0.761}>
                    <mesh
                      name="Object_86"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_86.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere008_49001"
                    position={[4.4, 0.236, 5.174]}
                    rotation={[-2.807, -0.319, -1.618]}
                    scale={0.472}>
                    <mesh
                      name="Object_88"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_88.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere009_50"
                    position={[3.734, 0.647, 5.056]}
                    rotation={[2.249, -0.667, -3.022]}
                    scale={0.472}>
                    <mesh
                      name="Object_90"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_90.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere010_51"
                    position={[0.611, 0.512, 5.056]}
                    rotation={[-2.213, -0.604, -0.745]}
                    scale={0.472}>
                    <mesh
                      name="Object_92"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_92.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere011_52001"
                    position={[-4.761, 0.236, 5.174]}
                    rotation={[-2.807, -0.319, -1.618]}
                    scale={0.472}>
                    <mesh
                      name="Object_94"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_94.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere012_53"
                    position={[-3.382, 0.36, 4.959]}
                    rotation={[0, 0, 2.316]}
                    scale={0.761}>
                    <mesh
                      name="Object_96"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_96.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere013_54"
                    position={[-2.25, 0.666, 5.056]}
                    rotation={[2.423, -0.857, -2.772]}
                    scale={0.472}>
                    <mesh
                      name="Object_98"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_98.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere014_55"
                    position={[1.152, 0.216, -5.262]}
                    rotation={[-2.273, 0.703, 0.157]}
                    scale={0.472}>
                    <mesh
                      name="Object_100"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_100.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere015_56"
                    position={[-0.191, 0.192, -5.222]}
                    rotation={[Math.PI, -1.52, -1.914]}
                    scale={0.761}>
                    <mesh
                      name="Object_102"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_102.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere016_57"
                    position={[4.4, 0.111, -5.176]}
                    rotation={[-2.807, -0.319, -1.618]}
                    scale={0.472}>
                    <mesh
                      name="Object_104"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_104.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere017_58"
                    position={[3.662, 0.709, -5.289]}
                    rotation={[2.249, -0.667, -3.022]}
                    scale={0.472}>
                    <mesh
                      name="Object_106"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_106.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere018_59"
                    position={[1.992, 0.65, -5.294]}
                    rotation={[-2.213, -0.604, -0.745]}
                    scale={0.472}>
                    <mesh
                      name="Object_108"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_108.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere019_60"
                    position={[-4.761, 0.236, -5.176]}
                    rotation={[-2.807, -0.319, -1.618]}
                    scale={0.472}>
                    <mesh
                      name="Object_110"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_110.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere020_61"
                    position={[4.921, 0.98, 2.939]}
                    rotation={[0, 1.46, 1.227]}
                    scale={0.761}>
                    <mesh
                      name="Object_112"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_112.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere021_62"
                    position={[-2.25, 0.666, -5.294]}
                    rotation={[2.423, -0.857, -2.772]}
                    scale={0.472}>
                    <mesh
                      name="Object_114"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_114.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere022_63"
                    position={[5.14, 0.677, -0.226]}
                    rotation={[-0.971, -1.183, 0.48]}
                    scale={0.472}>
                    <mesh
                      name="Object_116"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_116.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere023_64"
                    position={[5.155, 0.503, 1.258]}
                    rotation={[0.829, -0.592, 1.321]}
                    scale={0.472}>
                    <mesh
                      name="Object_118"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_118.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere024_65"
                    position={[4.844, 0.431, -1.967]}
                    rotation={[0.468, 0, 1.227]}
                    scale={0.761}>
                    <mesh
                      name="Object_120"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_120.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere025_66"
                    position={[5.155, 0.503, -4.161]}
                    rotation={[0.829, -0.592, 1.321]}
                    scale={0.472}>
                    <mesh
                      name="Object_122"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_122.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere026_67"
                    position={[-5.126, 0.431, 3.777]}
                    rotation={[0, 0, 1.227]}
                    scale={0.761}>
                    <mesh
                      name="Object_124"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_124.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere027_68"
                    position={[-5.258, 0.677, -0.226]}
                    rotation={[-0.971, -1.183, 0.48]}
                    scale={0.472}>
                    <mesh
                      name="Object_126"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_126.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere028_69"
                    position={[-5.243, 0.503, 1.258]}
                    rotation={[0.829, -0.592, 1.321]}
                    scale={0.472}>
                    <mesh
                      name="Object_128"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_128.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere029_70"
                    position={[-5.126, 0.431, -1.967]}
                    rotation={[0.468, 0, 1.227]}
                    scale={0.761}>
                    <mesh
                      name="Object_130"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_130.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere030_71"
                    position={[3.406, 2.337, 0.911]}
                    rotation={[0, 0.937, 1.227]}
                    scale={0.761}>
                    <mesh
                      name="Object_132"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_132.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere031_72"
                    position={[3.368, 2.248, -1.465]}
                    rotation={[-3.135, 1.471, -2.077]}
                    scale={0.635}>
                    <mesh
                      name="Object_134"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_134.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere032_73"
                    position={[0.331, 2.134, 1.103]}
                    rotation={[0, -0.373, 1.227]}
                    scale={0.761}>
                    <mesh
                      name="Object_136"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_136.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere033_74"
                    position={[-5.17, 0.503, -4.161]}
                    rotation={[0.829, -0.592, 1.321]}
                    scale={0.472}>
                    <mesh
                      name="Object_138"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_138.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Icosphere_41"
                    position={[-1.485, 1.494, 3.726]}
                    rotation={[0, 0, 0.809]}
                    scale={1.114}>
                    <mesh
                      name="Object_72"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_72.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Plane001_76"
                    position={[-0.005, 2.917, 0.116]}
                    rotation={[-0.082, 0.052, 2.024]}
                    scale={0.807}>
                    <mesh
                      name="Object_142"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_142.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Plane002_77"
                    position={[3.789, 2.922, 0.031]}
                    rotation={[-2.983, 0.109, -1.173]}
                    scale={0.82}>
                    <mesh
                      name="Object_144"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_144.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Plane003_78"
                    position={[3.544, 3.013, -1.086]}
                    rotation={[3.031, -0.639, -1.203]}
                    scale={0.965}>
                    <mesh
                      name="Object_146"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_146.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Plane004_79"
                    position={[0.342, 3.013, -1.106]}
                    rotation={[0.104, -0.556, 2.06]}
                    scale={0.965}>
                    <mesh
                      name="Object_148"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_148.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Plane005_80"
                    position={[2.554, 2.808, -1.861]}
                    rotation={[-2.935, -1.327, -0.902]}
                    scale={0.817}>
                    <mesh
                      name="Object_150"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_150.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Plane006_81"
                    position={[1.307, 3.013, -1.836]}
                    rotation={[0.236, -1.183, 2.224]}
                    scale={0.965}>
                    <mesh
                      name="Object_152"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_152.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Plane007_82"
                    position={[0.764, 2.719, 0.895]}
                    rotation={[0.11, 0.639, 1.939]}
                    scale={0.593}>
                    <mesh
                      name="Object_154"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_154.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Plane009_83" position={[0, 1.101, 0]}>
                    <mesh
                      name="Object_156"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_156.geometry}
                      material={materials['Material.006']}
                    />
                  </group>
                  <group name="Plane011_84" position={[0, 0.027, 0]}>
                    <mesh
                      name="Object_158"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_158.geometry}
                      material={materials['Material.007']}
                    />
                  </group>
                  <group name="Plane_75" position={[2.053, 2.245, 0.148]}>
                    <mesh
                      name="Object_140"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_140.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                </group>
                <group name="Empty_0" position={[-2.825, 0.934, 1.08]} rotation={[0, 0.026, 0]} />
                <group name="Plane008_92" position={[-2.008, -0.294, 0.103]} rotation={[0, 0.026, 0]}>
                  <mesh
                    name="Object_160"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_160.geometry}
                    material={materials['Material.008']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }

  export default Water; 
  useGLTF.preload("models3d/water");
