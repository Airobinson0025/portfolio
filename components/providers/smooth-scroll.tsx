'use client'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

type SmoothScrollProps = {
    children: React.ReactNode
}

function SmoothScroll({ children }: SmoothScrollProps) {

    return (
        <ReactLenis root>{children}</ReactLenis>
    )
}

export default SmoothScroll