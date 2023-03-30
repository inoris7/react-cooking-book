import { CategoryItem } from "./CategoryItem";

function CategoryList(props) {
    const {catalog = []} = props;

    if(!catalog.length) {
        return <h2>Nothing here</h2>
    }

    return (
        <div className="category-list">
            {
                catalog.map((item) => {
                   return <CategoryItem 
                    key={item.idCategory}
                    {...item} 
                    />;
                }
                )
            }
        </div>
    )
}

export {CategoryList};