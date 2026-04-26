import { useEffect, useRef, useState } from 'react'
import type { ParamHandlerKeyDown, Validkeys } from './type'


function useHitZone() {
    function keyAlreadyCliked(el: HTMLElement): boolean {
        //true: essa tecla ja foi clicada ou algo deu errado
        //el: é o elemento que representa a ceta
        const idData: string | undefined = el.dataset.id
        if (!idData) return true
        //resultado do adicao do id
        let resultAddId: boolean = false

        setlistOfKeysClicked(prev => {
            if (prev.includes(idData)) {
                resultAddId = true
                return prev
            }
            resultAddId = false
            return [...prev, idData]
        })
        return resultAddId
    }

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
        //essa key ja foi "clicado"
        const keyAlready = keyAlreadyCliked(elTarget)
        if (keyAlready) return // se sim apenas vamos ignora.
        //aqui temos a tecla, que foi "clicada".
        const keyCodeStr: string = e.code
        //caso a tecla nao seja valido, apenas as cetas sao permitadas
        if (!validKey.includes(keyCodeStr as Validkeys)) return // caso a tecla clicada nao seja valida
        const keyCode = keyCodeStr as Validkeys
        //pegando a direcao da key que ele "clicou"
        const keyDataStr: string | undefined = elTarget.dataset.direction
        if (!keyDataStr) return //caso nao nao tenha.
        const keyData = keyDataStr as Validkeys
        //Agora temos as direcao que dois.  
        console.log(keyCode)
        console.log(keyData)
        if (keyCode == keyData) console.log('Acertou.')
        else console.log('erroru')
    }

    //key validos
    const validKey: Validkeys[] = ['ArrowUp','ArrowLeft','ArrowDown','ArrowRight']

    const refDetector = useRef<HTMLDivElement | null>(null)
    const refParent = useRef<HTMLDivElement | null>(null)
    //state
    //state que irar guardar
    const [listOfKeysClicked, setlistOfKeysClicked] = useState<string[]>([])
    useEffect(() => {
        console.log(listOfKeysClicked)
    }, [listOfKeysClicked])
    return {
        HandlerKeyDown,
        refDetector,
        refParent
    }
}

export default useHitZone