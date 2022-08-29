import star from '../images/star.png';

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="Card">
            {badgeText && <div className='card--freeSpots'>{badgeText}</div>}
            <img className="card--image" src={props.item.photo} alt="" />
            <div className="card--ratings">
                <img className='card--ratings--star' src={star} alt="" />
                <div className='card--ratings--rating'>{props.item.rating}</div> (<div className='card--ratings--amount'>{props.item.reviewAmount}</div>) •
                <div className='card--ratings--location'>{props.item.location}</div>
            </div>
            <p className="card--desc">{props.item.description}</p>
            <div className="card--price"><div className='card--price--bold'>From ${props.item.price}</div> / person</div>
        </div>
    )
}