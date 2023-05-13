const Square = ({ value, chooseSqr, }) => {


	return (
		<div onClick={chooseSqr} className='active:bg-darkprimary cursor-pointer duration-300 w-1/3 h-full border border-black flex justify-center items-center text-8xl max-iphone:text-5xl active:text-9xl max-iphone:active:text-6xl '>
			{value}
		</div>
	)
}

export default Square
