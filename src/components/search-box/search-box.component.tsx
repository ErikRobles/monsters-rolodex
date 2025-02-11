import { ChangeEvent } from 'react'
import './search-box.styles.css'

interface SearchBoxProps {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    className: string;
}

const SearchBox = ({onChangeHandler, placeholder, className} : SearchBoxProps) => {  
        return(
                <input 
                    type="search" 
                    className={`search-box ${className}`}
                    placeholder={placeholder}
                    onChange={onChangeHandler} />
        )
}

export default SearchBox;