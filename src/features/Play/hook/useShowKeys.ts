import { useRef, useState } from "react"
import type { KeysElement, Validkeys, ParamHandlerKeyDown, SetStateClass,  ClassAnimeNames, StateClassesChildren } from "./type"

function useShowKeys() {
    function HandlerKeyDown({e}: ParamHandlerKeyDown) {
        //funcao local que tem como papel add 
        function AddAnimation(target: Validkeys) {
            classChildren[target](prev => {
                if (prev == '') return 'click-key-anime'
                else return ''
            })
        }

        //so passa aqui se refConteiner nao for null
        if (!refConteiner.current) return

        //pegandos as teclas
        const children = [...refConteiner.current.children] as Array<HTMLDivElement> 
        const keysel: KeysElement[] = children.map(el => {
            const datakey = el.dataset.direction as Validkeys
            return {
                el: el,
                key: datakey
            }
        })
        const key = e.code as Validkeys

        if (!validKey.includes(key as Validkeys)) return 
        const keyTarget: KeysElement | undefined = keysel.find(value => value.key == key)
        if (!keyTarget) return // caso nao exista
        AddAnimation(keyTarget.key)
    }

    function RemoveClass(setClass: SetStateClass) {
        setClass('')
    }

    //key validos
    const validKey: Validkeys[] = ['ArrowUp','ArrowLeft','ArrowDown','ArrowRight']

    //referencia ao pai
    const refConteiner = useRef<HTMLDivElement | null>(null)
    //classs do filho
    const [classLeft, setclassLeft] = useState<ClassAnimeNames>('')
    const [classRight, setclassRight] = useState<ClassAnimeNames>('')
    const [classTop, setclassTop] = useState<ClassAnimeNames>('')
    const [classBottom, setclassBottom] = useState<ClassAnimeNames>('')

    const [classChildren] = useState<StateClassesChildren>({
        ArrowDown: setclassBottom,
        ArrowLeft: setclassLeft,
        ArrowRight: setclassRight,
        ArrowUp: setclassTop
    })

    return {
        HandlerKeyDown,
        RemoveClass,
        classBottom,
        classLeft,
        classRight,
        classTop,
        classChildren,
        refConteiner,
        setclassBottom,
        setclassLeft,
        setclassRight,
        setclassTop
    }
}

export default useShowKeys