import { type Dispatch, type SetStateAction } from 'react'



export type keyTarget = 'ArrowUp' | 'ArrowLeft' | 'ArrowRight' | 'ArrowDown'

export type KeysElement = { el: HTMLDivElement, key: keyTarget }

export type ClassAnimeNames = 'click-key-anime' | ''
export type SetStateClass = Dispatch<SetStateAction<ClassAnimeNames>>
export type StateClassesChildren = Record<keyTarget, SetStateClass>

export type ParamHandlerKeyDown = {
    e: KeyboardEvent,
    parent: HTMLDivElement,
    setClasses: StateClassesChildren
}