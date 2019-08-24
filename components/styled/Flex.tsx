import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface FlexProps {
	row?: boolean
	column?: boolean
	full?: boolean
	jCenter?: boolean
	jBetween?: boolean
	iCenter?: boolean
	iStretch?: boolean
	wrap?: boolean
	className?: string
}

const Flex: FunctionComponent<FlexProps> = ({
	row=false, column=false, 
	full=false,
	jCenter=false, jBetween=false, iCenter=false, iStretch=false, wrap=false,
	className='',
	children
}) => {
	const cs = classnames({
		'flex': true,
		'flex-row': row,
		'flex-column': column,
		'flex--full': full,
		'flex--iCenter': iCenter,
		'flex--iStretch': iStretch,
		'flex--jCenter': jCenter,
		'flex--jBetween': jBetween,
		'flex--wrap': wrap,
		[className]: true
	})
	return (
		<div className={cs}>
			{children}
		</div>
	)
}

export default Flex


// import React, { FunctionComponent } from 'react'
// import styles from '../../styles'
// import classnames from 'classnames'

// interface FlexProps {
// 	row?: boolean
// 	column?: boolean
// 	full?: boolean
// 	jCenter?: boolean
// 	iCenter?: boolean
// 	wrap?: boolean
// 	className?: string
// }

// const Flex: FunctionComponent<FlexProps> = ({
// 	row=false, column=false, 
// 	full=false,
// 	jCenter=false, iCenter=false, wrap=false,
// 	className='',
// 	children
// }) => {
// 	const cs = classnames({
// 		[styles['flex']]: true,
// 		[styles['flex-row']]: row,
// 		[styles['flex-column']]: column,
// 		[styles['flex--full']]: full,
// 		[styles['flex--iCenter']]: iCenter,
// 		[styles['flex--jCenter']]: jCenter,
// 		[styles['flex--wrap']]: wrap,
// 		[className]: true
// 	})
// 	return (
// 		<div className={cs}>
// 			{children}
// 		</div>
// 	)
// }

// export default Flex