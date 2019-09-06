import React from 'react';

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props; where props would be the argument received
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}? size=200x200`} alt='robot via templete literal' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;