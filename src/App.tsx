import './App.css'
import { Canvas } from '@react-three/fiber'
import Star from './components/Star'
import { Stats, OrbitControls } from '@react-three/drei'

function generateRandom(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateRandomPosition(min: number, max: number) {
	const vector3 = Array.from(Array(3)).map(() => generateRandom(min, max)) as [
		x: number,
		y: number,
		z: number,
	]
	return vector3
}

function generateStars() {
	const stars = []
	const noOfStars = 100
	// max and min offset from orgin position
	const minP = -50
	const maxP = 50
	const color = 0xffffff
	const intensity = 1

	for (let i = 0; i < noOfStars; i++) {
		stars.push(
			<Star
				key={`star-${i}`}
				position={generateRandomPosition(minP, maxP)}
				color={color}
				intensity={intensity}
			/>,
		)
	}

	return stars
}

function App() {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<Canvas>
				{/* <ambientLight /> */}
				<pointLight position={[7, 0, -1]} color={'green'} />
				{generateStars()}
				<OrbitControls></OrbitControls>
			</Canvas>
		</div>
	)
}

export default App
