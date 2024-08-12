import React from 'react'
import './styles/SassPractice.scss'

export default function SassPractice() {
    return (
        // 참고. 컴포넌트 코드
        <div className="larva">
            <div className="body body1">
                <div className="eye eye-white">
                    <div className="eye eye-black"></div>
                </div>
            </div>
            <div className="body body2"></div>
            <div className="body body3"></div>
            <div className="body body4"></div>
            <div className="body body5"></div>

            {/*  process.env.PUBLIC_URL: /public 폴더 경로 */}
            <img
                className="grass"
                src={process.env.PUBLIC_URL + '/images/grass.png'}
                alt="잔디"
            />
        </div>
    )
}
