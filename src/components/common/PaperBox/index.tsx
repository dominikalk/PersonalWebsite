import React from 'react';
import './styles.scss'

type PaperBoxProps = {
    lines?: number;
    className?: string;
    children: React.ReactNode;
}

const PaperBox = ({lines, className, children}: PaperBoxProps) => {
    return(
        <div className={`container ${className}`}>
            {lines && [...Array(lines)]
                .map((e, i) => 
                    <div className='line' key={i}/>
                )
            }
            <div className='children'>
                {children}
            </div>
        </div>
    );
}

export default PaperBox;