import { useState } from "react";

function Search({cb = Function.prototype}) {
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        cb(value)
    };

    const handleKey = (evt) => {
        if(evt.key === 'Enter') {
            handleSubmit();
        }
    }    
        
    return (
        <div className="col">
            <div className="input-field col s6">
                <input 
                    placeholder="Search" 
                    id="search-field" 
                    type="search"
                    value={value}
                    onChange={(evt) => setValue(evt.target.value)}
                    onKeyDown={handleKey}
                />
                <button 
                    className="btn"
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0'
                    }}
                    onClick={handleSubmit}
                >
                    Search
                </button>
          
            </div>
        </div>
    )
}

export {Search};