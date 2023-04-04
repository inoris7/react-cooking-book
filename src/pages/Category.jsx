import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredByCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryMeal } from "../components/CategoryMeal";

function Category() {
    const [meals, setMeals] = useState([]);
    const {name} = useParams();
    const navigate = useNavigate();      

    useEffect(() => {
        getFilteredByCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    return <>
        <button className="btn btn-back" onClick={() => navigate(-1)}>Back</button>
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
        <button className="btn btn-back" onClick={() => navigate(-1)}>Back</button>
    </>
};

export {Category};