import { useNavigate } from "react-router-dom";

function Product(props) {
    const navigate = useNavigate();

    function handleClick() {
        props.setAmount(props.amount + 1);
    }

    function goToProductInfo() {
        navigate(`/produkt/${props.title}`);
    }

    return (
        <article>
            <img src={ props.image } alt="" />
            <h2>{ props.title }</h2>
            <h3>{ props.brand }</h3>
            <p>{ props.description }</p>
            <button onClick={ handleClick }>Add to cart</button>
            <button onClick={ goToProductInfo }>Se mer info</button>
        </article>
    )
}

export default Product;