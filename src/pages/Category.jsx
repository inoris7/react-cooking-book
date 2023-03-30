import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getFilteredByCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryMeal } from "../components/CategoryMeal";

function Category() {
    const [meals, setMeals] = useState([]);
    const {name} = useParams();
    const {goBack} = useHistory();      

    useEffect(() => {
        getFilteredByCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    return <>
        <button className="btn btn-back" onClick={goBack}>Back</button>
        {
            !meals.length ? <Preloader /> :
                <>
                    <h2>{name} meals</h2> 
                    <div className="category-list">                    
                        {
                            meals.map((item) => {
                                return <CategoryMeal 
                                key={item.idMeal}
                                {...item}
                                />
                            })
                        }
                    </div>
                </>
            
        }
        <button className="btn btn-back" onClick={goBack}>Back</button>
    </>
};

export {Category};