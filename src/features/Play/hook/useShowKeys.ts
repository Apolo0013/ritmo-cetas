import type { KeysElement, keyTarget, ParamHandlerKeyDown, SetStateClass } from "./type"

function useShowKeys() {
    function HandlerKeyDown({
        e,
        parent,
        setClasses
     }: ParamHandlerKeyDown) {
        //funcao local que tem como papel add 
        function AddAnimation(target: keyTarget) {
            setClasses[target](prev => {
                if (prev == '') return 'click-key-anime'
                else return ''
            })
        }
        
        //pegandos as teclas
        const children = [...parent.children] as Array<HTMLDivElement> 
        const keysel: KeysElement[] = children.map(el => {
            const datakey = el.dataset.direction as keyTarget
            return {
                el: el,
                key: datakey
            }
        })
        //lista das teclas
        const listteclas: keyTarget[] = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown']
        const key = e.code as keyTarget

        if (!listteclas.some(k => key == k)) return 
        console.log('aqui')
        const keyTarget: KeysElement | undefined = keysel.find(value => value.key == key)
        if (!keyTarget) return // caso nao exista
        AddAnimation(keyTarget.key)
    }

    function RemoveClass(setClass: SetStateClass) {
        setClass('')
    }

    return {
        HandlerKeyDown,
        RemoveClass
    }
}

export default useShowKeys