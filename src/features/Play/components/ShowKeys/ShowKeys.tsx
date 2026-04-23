//react
import { useEffect } from 'react'
//css
import './ShowKeys.scss'
//imagem
import ImgArrow from '../../../../shared/assets/arrow.svg'
import useShowKeys from '../../hook/useShowKeys'
//service
import {addCallBackKeyDown} from '../../../../shared/services/keydownManager'

function ShowKeys() {
    //hook
    const {
        HandlerKeyDown,
        RemoveClass,
        classBottom,
        classLeft,
        classRight,
        classTop,
        setclassBottom,
        setclassLeft,
        setclassRight,
        setclassTop,
        refConteiner,
    } = useShowKeys()
    

    //registar o callback
    useEffect(() => {
        if (!refConteiner.current) return
        addCallBackKeyDown(
            (e) => HandlerKeyDown({
                e: e
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