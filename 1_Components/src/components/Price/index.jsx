const Price  = ({ price, discount }) => {
    const discountedPrice = (price  * (1 - discount / 100)).toFixed(2);
    return (
        <div>
            <p>Original Price: {price}</p>
            <p>Discounted Price: {discountedPrice}</p>
        </div>
    )
}

export default Price;