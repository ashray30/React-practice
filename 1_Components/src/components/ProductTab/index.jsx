 import Product from "../Product";
import "./index.css"n
 const ProductTab = () => {
    return(
        <div className="productTab">
            <Product title = "LG Refrigerator" idx={0} imgsrc="https://images.samsung.com/is/image/samsung/p6pim/in/rt31h4522s9-hl/energylabel/in-energylabel-product-rt31h4522s9-hl-551045621?$1164_776_PNG$" />
            <Product title = "Samsung Refrigerator" idx={1} imgsrc="https://images.samsung.com/is/image/samsung/p6pim/in/rt31h4522s9-hl/energylabel/in-energylabel-product-rt31h4522s9-hl-551045621?$1164_776_PNG$" />
            <Product title = "Whirlpool Refrigerator" idx={2} imgsrc="https://images.samsung.com/is/image/samsung/p6pim/in/rt31h4522s9-hl/energylabel/in-energylabel-product-rt31h4522s9-hl-551045621?$1164_776_PNG$" />
            <Product title = "GE Refrigerator" idx={3} imgsrc="https://images.samsung.com/is/image/samsung/p6pim/in/rt31h4522s9-hl/energylabel/in-energylabel-product-rt31h4522s9-hl-551045621?$1164_776_PNG$" />
            <Product title = "Frigidaire Refrigerator" idx={4} imgsrc="https://images.samsung.com/is/image/samsung/p6pim/in/rt31h4522s9-hl/energylabel/in-energylabel-product-rt31h4522s9-hl-551045621?$1164_776_PNG$" />
            <Product title = "Bosch Refrigerator" idx={5} imgsrc="https://images.samsung.com/is/image/samsung/p6pim/in/rt31h4522s9-hl/energylabel/in-energylabel-product-rt31h4522s9-hl-551045621?$1164_776_PNG$" />
        </div>
    )
}

export default ProductTab;