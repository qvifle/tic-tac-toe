import React, { Fragment } from 'react'

const Row = ({children}) => {
	return (
		<div className='h-1/3 w-full flex border border-black'>
			{children}
		</div>
	)
}

export default Row
