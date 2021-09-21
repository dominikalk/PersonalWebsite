import React, { ReactNode } from 'react';
import './styles.scss'

// export type ReactNode =
// 	| React.ReactChild
// 	| React.ReactFragment
// 	| React.ReactPortal
// 	| boolean
// 	| null
// 	| undefined;

type TxtProps = {
    font?: 'primary' | 'secondary';
    color?: 'primary' | 'gray' | 'black';
	style?: React.CSSProperties;
	children: ReactNode;
}

const Txt = ({ font, color, style, children }: TxtProps) => {
	return (
		<p style={style} className={`${font ?? 'secondary'} ${color ?? 'black'}`}>
			{children}
		</p>
	);
};

export default Txt;