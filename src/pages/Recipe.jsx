import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() { 
    const {goBack} = useHistory();   
    const [recipe = {}, setRecipe] = useState();
    const {id} = useParams();    
    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strCategory,
        strArea,
        strYoutube
    } = recipe;
    
    // const keys = Object.keys(recipe);
    // const keysIngr = keys.filter(el =>  el.includes('strIngredient'));
    // console.log(keys);
    // console.log(keysIngr);

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id]);

    return <>
        <button className="btn btn-back" onClick={goBack}>Back</button>
        {   
            !recipe ? <Preloader /> : (
                <div className="recipe">                    
                    <h2>{strMeal}</h2>
                    <img src={strMealThumb} alt={strMeal} />
                    <h5>Category: {strCategory}</h5>
                    {strArea && <h6>Area: {strArea}</h6>}
                    <p>{strInstructions}</p>

                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    if(key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </tbody>
                    </table>

                    {strYoutube ? (
                        <div className="row">
                            <h4>Video recipe</h4>
                            <iframe src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} title={strMeal} frameBorder='0' allowFullScreen></iframe>
                        </div>
                    ) : null}

                </div>
            )
        }
    </>    
}

export {Recipe};