import { randint } from "../../../shared/utils"

function useContent() {
    function TradeRotate(parent: HTMLElement) {
        if (!parent) return
        const children = [...parent.children] as HTMLElement[]
        const rotates: string[] = ['0deg', '90deg', '180deg', '270deg']
        //primeira rotacao
        children.forEach(e => e.style.transform = `rotate(${rotates[randint(0, 3)]})`)
        const timer = setInterval(() => {
            console.log('opa')
            children.forEach(e => {
                e.style.transform = `rotate(${rotates[randint(0, 3)]})`
            })
        }, 5000) 
        return () => clearInterval(timer)
    }

    return {
        TradeRotate
    }
}

export default useContent