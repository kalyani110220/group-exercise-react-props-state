// 💡 You can import assets like images directly and use them in your components:
import ChuckImage from '../assets/chuck_norris.jpg';

interface ChuckCardProps {
	greeting:string
}

const ChuckCard: React.FC<ChuckCardProps> = ({greeting}) => {

	return (
		// 💡 This weird-looking `<>` thing is a "Fragment". Each component must have exactly one child.
		// 💡 As a result, sometimes it is useful to wrap components in Fragments like this:
		<>
			{/* 💡 We can insert JavaScript into our JSX using curly braces like the ones below in the h2 */}
			<h2>{greeting }</h2>

			<img src={'https://i.pinimg.com/originals/0b/c2/f4/0bc2f417af8030b3f4390a0b3a1d8357.jpg'} alt='A handsome man' width={200} height={200} />
		</>
	)
}

export default ChuckCard;
