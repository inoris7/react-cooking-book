function CategoryButtons(props) {
    const {
            catalog, 
            handleSearch, 
            setfilteredCatalog,
            handleResetUrl
        } = props;
    // console.log('Catalog:', catalog);
    // console.log(catalog);
    // console.log(catalog);

    return (
    <div className="category-buttons">
        { 
            catalog.map(item => {
                return <button 
                        className="btn" 
                        key={item.idCategory}
                        onClick={() => handleSearch(item.strCategory)}
                    >
                        {item.strCategory}
                    </button>
            })
        }
        <button className="btn" onClick={() => {
            setfilteredCatalog(catalog);
            handleResetUrl();
            }}>All</button>    
    </div>
    )
}

export {CategoryButtons};