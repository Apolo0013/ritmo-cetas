import './HitZone.scss'
//imagens
import {imagens} from '../../../../shared/assets/index'
//Hook
import useHitZone from '../../hook/useHitZone'
import { useEffect } from 'react'
//services
import { addCallBackKeyDown } from '../../../../shared/services/keydownManager'
import type { keyInfo } from '../../hook/type'

function HitZone() {
    const keyList = [
        {
            key: 'ArrowUp',
            direction: '0deg'
        },
        {
            key: 'ArrowRight',
            direction: '90deg'
        },
        {
            key: 'ArrowDown',
            direction: '180deg'
        },
        {
            key: 'ArrowLeft',
            direction: '270deg'
        }
    ] satisfies keyInfo[]
    //hook
    const {
        refDetector,
        refParent,
        HandlerKeyDown
    } = useHitZone()

    //use Effect
    useEffect(() => {
        addCallBackKeyDown((e) => HandlerKeyDown({
            e
        }))
    }, [])
    return (
        <div className='play-hitzone'>
            <div
                className="detector"
                ref={refDetector}
            ></div>
            <div
                className="wraper-keys-move"
                ref={refParent}
            >
                {
                    keyList.map(({direction, key}, k) => (
                        <div
                            className='key-move'
                            key={k}
                            data-direction={key}
                            //direcao
                            style={{transform: `rotate(${direction})`}}
                        >
                            <img
                                src={imagens.arrow}
                                alt="Imagem de um ceta"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HitZone