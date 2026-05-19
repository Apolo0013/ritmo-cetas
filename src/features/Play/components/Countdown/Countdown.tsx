import './Countdown.scss'
//
import { countDownState } from '../../store/countDown.store'
import { useAudio } from '../../store/audioContext/useAudio'
import { useEffect } from 'react'

function CountDown() {
    const { playAudio } = useAudio()!
    const TimeOutCount = countDownState(state => state.TimeOutCount)
    useEffect(() => {
        TimeOutCount(playAudio)
    }, [])

    return (
        <div className="count-down">
            <div className='conteiner-count'>
                <div className="wraper-count">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
            </div>
        </div>
    )
}

export default CountDown