import './Character.scss';
import { useEffect } from 'react';
import { eyesBlinking } from '../../selectors/characterAnimations/eyesBlinking';
function Character() {

    useEffect(() => {
        return () => {
            eyesBlinking()
          };
    }, []);

    return (
      <div className="scene">
        <div className="character">
            <div className="wrist"></div>
            <div className="wrist"></div>
            <div className="arm"></div>
            <div className="arm"></div>
            <div className="forearm"></div>
            <div className="forearm"></div>
            <div className="shoulder"></div>
            <div className="shoulder"></div>
            <div className="body"></div>
            <div className="pelvis"></div>
            <div className="thigh"></div>
            <div className="thigh"></div>
            <div className="calf"></div>
            <div className="calf"></div>
            <div className="knee"></div>
            <div className="knee"></div>
            <div className="hand"></div>
            <div className="hand"></div>
            <div className="belt"></div>
            <div className="head">
                <div className="neck"></div>
                <div className="ear"></div>
                <div className="ear"></div>
                <div className="hair-back"></div>
                <div className="face">
                    <div className="mouth"></div>
                    <div className="nose"></div>
                    <div className="eye"></div>
                    <div className="eye"></div>
                </div>
                <div className="hair-side"></div>
                <div className="hair-side"></div>
                <div className="bangs"></div>
                <div className="mesh"></div>
                <div className="mesh2"></div>
                <div className="eyebrow"></div>
                <div className="eyebrow"></div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Character;