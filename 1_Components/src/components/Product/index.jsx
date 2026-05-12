import Price from "../Price"
import "./index.css"
const Product = ({title, idx, imgsrc}) => {
    let description = [
    {
        quality: "Good",
        performance: "Excellent"
    },
    {
        quality: "Average",
        performance: "Good"
    },
    {
        quality: "Poor",
        performance: "Average"
    },
    {
        quality: "Excellent",
        performance: "Excellent"
    },
    {
        quality: "Premium",
        performance: "Outstanding"
    },
    {
        quality: "Best",
        performance: "Fantastic"
    }
]

let price = [{
    price: 1000,
    discount: 10
},
{
    price: 1500,
    discount: 15    
},
{
    price: 2000,    
    discount: 20
},
{
    price: 2500,    
    discount: 25
},
{
    price: 3000,    
    discount: 30
},{
    price: 3500,    
    discount: 35
}


]
    return (
        <div className="product">
            <img src={imgsrc} alt={title} width="200" />
            <h2>{title}</h2>
            <p>Product No: {idx}</p>
            <p>Quality: {description[idx].quality}</p>
            <p>Performance: {description[idx].performance}</p>

            <Price price={price[idx].price} discount={price[idx].discount} />
        </div>
    )
}

export default Product