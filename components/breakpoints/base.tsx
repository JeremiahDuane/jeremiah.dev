"use client"
import { AspectRatio } from '@/globals/aspect-ratio'
import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import MediaQuery from 'react-responsive'

export interface BaseProps {
    children: ReactNode | ReactNode[]
}

export const getBreakpointComponent: (resolutionMin: AspectRatio, resolutionMax: AspectRatio) => FC<BaseProps> = (resolutionMin: number, resolutionMax: number) => ({children}: BaseProps) => {
    const [onClient, setOnClient] = useState<boolean>(false)
    useEffect(() => { setOnClient(true) })

    const component = useMemo(() => onClient ? (
        <MediaQuery minWidth={resolutionMin} maxWidth={resolutionMax}>
            {children}
        </MediaQuery>
    ) : (<></>), [onClient, children])

    return component
}
