import { FC } from 'react'

const Globe: FC = () => {
	return (
		<mesh scale={1000} position={[0, -1000, 0]}>
			<sphereGeometry />
			<meshStandardMaterial color='green' />
		</mesh>
	)
}

export default Globe
