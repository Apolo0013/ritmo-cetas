
const CallBack: Set<(e: KeyboardEvent) => void> = new Set()

let initInicilizer: boolean = false

function handlerKeyDown(e: KeyboardEvent) {
    if ([...CallBack].length == 0) return // caso nao tenha nenhum callback
    CallBack.forEach(cb => {cb(e)})
}

export function initKeyDown() {
    if (initInicilizer) return
    document.addEventListener("keydown", (e) => handlerKeyDown(e))
    initInicilizer = true
}

export function addCallBackKeyDown(cb: (e: KeyboardEvent) => void) {
    try {
        CallBack.add(cb)
        return () => CallBack.delete(cb)
    }
    catch {
        console.error('callback ja adicionado.')
    }
}