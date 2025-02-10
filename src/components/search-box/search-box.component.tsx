import { Component, ChangeEvent } from 'react'
import './search-box.styles.css'

interface SearchBoxProps {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    className: string;
}

class SearchBox extends Component<SearchBoxProps> {

       render() {
        return(
            <>
                <input 
                    type="search" 
                    className={`search-box ${this.props.className}`}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler} />
            </>
        )

    }
}

export default SearchBox;