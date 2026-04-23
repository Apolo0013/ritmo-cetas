import { useRef } from 'react'
import type { ParamHandlerKeyDown, Validkeys } from './type'


function useHitZone() {
    function HandlerKeyDown({ e }: ParamHandlerKeyDown) {
        //se ele for false nao passa
        if (!refDetector.current || !refParent.current) return
        const rectDetector: DOMRect = refDetector.current.getBoundingClientRect()
        const centroX: number = rectDetector.left + rectDetector.width / 2
        //children seria o as cetas.
        const children = [...refParent.current.children] as HTMLElement[]
        //key que foi "clicada"
        let elTarget: HTMLElement | null = null
        for (const el of children) {
            const rectE: DOMRect = el.getBoundingClientRect()
            const colidiu: boolean =
                centroX <= rectE.right &&
                centroX >= rectE.left
            
            if (colidiu) {
                elTarget = el
                break
            }
        }
        //caso ele for nulo que dizer que nenhum key foi clicado
        if (!elTarget) return
        //aqui temos a tecla, que foi "clicada".
        const keyCodeStr: string = e.code
        //caso a tecla nao seja valido, apenas as cetas sao permitadas
        if (!validKey.includes(keyCodeStr as Validkeys)) return
        const keyCode = keyCodeStr as Validkeys
        //pegando a direcao da key que ele "clicou"
        const keyDataStr: string | undefined = elTarget.dataset.direction
        if (!keyDataStr) return //caso nao nao tenha.
        const keyData = keyDataStr as Validkeys
        //Agora temos as direcao que dois.  

        if (keyCode == keyData) console.log('Acertou.')
        else console.log('erroru')
    }

    //key validos
    const validKey: Validkeys[] = ['ArrowUp','ArrowLeft','ArrowDown','ArrowRight']

    const refDetector = useRef<HTMLDivElement | null>(null)
    const refParent = useRef<HTMLDivElement | null>(null)

    return {
        HandlerKeyDown,
        refDetector,
        refParent
    }
}

export default useHitZone