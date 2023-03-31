import { Link } from "react-router-dom";

function CategoryItem(props) {
    const {        
        strCategory: mealCategory,
        strCategoryThumb: pic,
        strCategoryDescription: description, 
    } = props;

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <Link 
                        className="card-image"
                        to={`/category/${mealCategory}`}   
                    >
                        <img src={pic} alt={mealCategory} />                                    
                    </Link>
                    <div className="card-content">
                        <span className="card-title">{mealCategory}</span>
                        <p className="category-description">{description}</p>
                    </div>
                    <div className="card-action">                    
                        <Link 
                            className='btn'
                            to={`/category/${mealCategory}`}                        
                        >
                            Open
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {CategoryItem};