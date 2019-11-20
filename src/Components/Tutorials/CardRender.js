import React from 'react';
import PropTypes from 'prop-types';

const CardRender = ({card}) => {
    const {index, picture, content } = card;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt="alt icon" />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {content}
                </p>
            </div>
        </div>
    )
}

CardRender.propTypes = {
    card: PropTypes.object.isRequired
}

export default CardRender;