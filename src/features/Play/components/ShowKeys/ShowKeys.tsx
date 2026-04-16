//react
import { useEffect, useRef, useState } from 'react'
//css
import './ShowKeys.scss'
//imagem
import ImgArrow from '../../../../shared/assets/arrow.svg'
import useShowKeys from '../../hook/useShowKeys'
//service
import {addCallBackKeyDown} from '../../../../shared/services/keydownManager'
import type { ClassAnimeNames, StateClassesChildren } from '../..//hook/type'

function ShowKeys() {
    //hook
    const {
        HandlerKeyDown,
        RemoveClass
    } = useShowKeys()
    //referencia ao pai
    const refConteiner = useRef<HTMLDivElement | null>(null)
    //classs do filho
    const [classLeft, setclassLeft] = useState<ClassAnimeNames>('')
    const [classRight, setclassRight] = useState<ClassAnimeNames>('')
    const [classTop, setclassTop] = useState<ClassAnimeNames>('')
    const [classBottom, setclassBottom] = useState<ClassAnimeNames>('')

    const [classChildren]= useState<StateClassesChildren>({
        ArrowDown: setclassBottom,
        ArrowLeft: setclassLeft,
        ArrowRight: setclassRight,
        ArrowUp: setclassTop
    })

    //registar o callback
    useEffect(() => {
        if (!refConteiner.current) return
        addCallBackKeyDown(
            (e) => HandlerKeyDown({
                e: e,
                parent: refConteiner.current!,
                setClasses: classChildren
            })
        )
    }, [])
    return (
        <div
            className='play-showkeys'
            ref={refConteiner}
        >
    
            <div
                className={`key-show ${classTop}`}
                data-direction="ArrowUp"
                onAnimationEnd={() => RemoveClass(setclassTop)}
            >
                <img
                    src={ImgArrow}
                    alt="Imagem de um certa"
                    style={{transform: `rotate(0deg)`}}
                />
            </div>

            <div
                className={`key-show ${classRight}`}
                data-direction="ArrowRight"
                onAnimationEnd={() => RemoveClass(setclassRight)}
            >
                <img
                    src={ImgArrow}
                    alt="Imagem de um certa"
                    style={{transform: `rotate(90deg)`}}
                />
            </div>

            <div
                className={`key-show ${classBottom}`}
                data-direction="ArrowDown"
                onAnimationEnd={() => RemoveClass(setclassBottom)}
            >
                <img
                    src={ImgArrow}
                    alt="Imagem de um certa"
                    style={{transform: `rotate(180deg)`}}
                />
            </div>

            <div
                className={`key-show ${classLeft}`}
                data-direction="ArrowLeft"
                onAnimationEnd={() => RemoveClass(setclassLeft)} 
            >
                <img
                    src={ImgArrow}
                    alt="Imagem de um certa"
                    style={{transform: `rotate(270deg)`}}
                />
            </div>
        
        </div>
    )
}

export default ShowKeys