import { FC } from 'react'

const Globe: FC = () => {
	return (
		<mesh scale={100} position={[0, -100, 0]}>
			<sphereGeometry />
			<meshStandardMaterial color='green' />
		</mesh>
	)
}

export default Globe
