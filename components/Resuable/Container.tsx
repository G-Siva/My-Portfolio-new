import React, { ReactNode } from 'react'


interface ContainerProps {
    children: ReactNode
    className?: string
    isFullWidth?: boolean
    paddingSmall?: boolean
    paddingNormal?: boolean
    paddingLarge?: boolean

}


const Container = ({ children, className, isFullWidth, paddingLarge, paddingNormal, paddingSmall }: ContainerProps) => {
    return (
        <div className={`${className} ${isFullWidth === true && "px-0"} ${paddingSmall === true && "px-2"} ${paddingNormal === true && "px-6"} ${paddingLarge === true && "px-10"}`}>
            {children}
        </div>
    )
}

export default Container