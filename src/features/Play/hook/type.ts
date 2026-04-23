import { type Dispatch, type SetStateAction } from 'react'



export type Validkeys = 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowDown'
export type Direction = '0deg' | '90deg' | '180deg' | '270deg'

export type keyInfo = {
    key: Validkeys,
    direction: Direction
}

export type KeysElement = { el: HTMLDivElement, key: Validkeys }

export type ClassAnimeNames = 'click-key-anime' | ''
export type SetStateClass = Dispatch<SetStateAction<ClassAnimeNames>>
export type StateClassesChildren = Record<Validkeys, SetStateClass>

export type ParamHandlerKeyDown = {
    e: KeyboardEvent
}