import { Link } from "react-router-dom";

function CategoryMeal(props) {
    const {
        strMeal,
        strMealThumb,
        idMeal
    } = props;

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <Link 
                        className="card-image"
                        to={`/recipe/${idMeal}`}
                    >
                        <img src={strMealThumb} alt={strMeal} />                                    
                    </Link>
                    <div className="card-content card-content--meals">
                        <span className="card-title">{strMeal}</span>                        
                    </div>
                    <div className="card-action">                    
                        <Link 
                            className='btn'
                            to={`/recipe/${idMeal}`}                        
                        >
                            Reciepe
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export {CategoryMeal};