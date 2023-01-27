/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Stand: THREE.Mesh
	}
	materials: {
		Material: THREE.MeshStandardMaterial
	}
}

export function Stand(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/glb/art_piece_stand.glb') as unknown as GLTFResult
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Stand.geometry}
				material={materials.Material}
				userData={{ name: 'Stand' }}
			/>
		</group>
	)
}

useGLTF.preload('/glb/art_piece_stand.glb')
