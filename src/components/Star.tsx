import * as fiber from '@react-three/fiber'

interface StarProps {
	position: fiber.Vector3
	color: number
	intensity: number
	distance?: number
	decay?: number
}

const Star = ({ position, color, intensity, distance = 0, decay = 2 }: StarProps): JSX.Element => {
	return (
		<>
			<pointLight
				position={position}
				color={color}
				intensity={intensity}
				distance={distance}
				decay={decay}
			></pointLight>
			<mesh scale={0.1} position={position}>
				<sphereGeometry />
				<meshStandardMaterial color='white' />
			</mesh>
		</>
	)
}

export default Star
