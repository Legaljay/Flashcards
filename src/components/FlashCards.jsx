import PropTypes from 'prop-types'
export default function FlashCards(prop) {
    return (
        <div className={prop.className} onClick={prop.onMouseEnter}>
            {prop.data}
        </div>
    );
}

FlashCards.propTypes = {
    answer: PropTypes.object
}