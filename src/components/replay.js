import React from 'react';

const Replay = ({score,playAgain}) => {
    return(
        <div>
            <div>You Scored {score} / 5 </div>
            <button className='replay' onClick={playAgain}>Replay</button>
        </div>
    )
}

export default Replay;