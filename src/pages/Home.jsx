import { getAllCategories } from "../api";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { CategoryList } from "../components/CategoryList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setfilteredCatalog] = useState([]);
    const {path, search} = useLocation();
    const {push} = useHistory();


    const handleSearch = (str) => {
        setfilteredCatalog(catalog.filter(item => 
            item.strCategory.toLowerCase()
                .includes(str.toLowerCase())));
        
        push(
            {
                path,
                search: `?search=${str}`
            }
        );
    };

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setfilteredCatalog(search ? data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())): data.categories);
        });
    }, [search]);

    return (
        <>
            <Search cb={handleSearch}/>
            {
            !catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />          
            }
        </>
    )
    
}

export {Home};