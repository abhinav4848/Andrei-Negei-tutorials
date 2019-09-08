import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    //robots[i].id, etc can also work instead of user.id
                    return (
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            username={user.username} />
                    );
                })
            }
        </div>
    );
}

export default CardList;