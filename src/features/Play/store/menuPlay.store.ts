import { create } from "zustand";

type MenuPlayState = {
    isShow: boolean,
    setIsShow: (value: boolean) => void,
    isBegin: boolean, // ele ja inicio (apertou o botao de comeca a jogatina)
    setIsBegin: (value: boolean) => void
}

export const menuPlayState = create<MenuPlayState>((set) => ({
    // responsavel por mostrar o menu play
    isShow: true,
    setIsShow: (value: boolean) => set({
        isShow: value
    }),
    // responsavel por dizer oq exbir, start ou stop
    isBegin: true,
    setIsBegin: (value: boolean) => set({
        isBegin: value
    })
}))