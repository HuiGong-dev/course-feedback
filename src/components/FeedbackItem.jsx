import React from  'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({item, handleDelete}){
    const darkColor = '#383e65';

    return (
        <div className='card'>
            <div className='num-display'>{item.rating}</div>
            <button onClick={()=>handleDelete(item.id)} className="close">
                <FaTimes color={darkColor} />
            </button>
            <div className="text-display">{item.text}</div>
        </div>

    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;