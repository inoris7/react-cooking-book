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
                    <div className="card-image">
                        <img src={pic} alt={mealCategory} />                                    
                    </div>
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