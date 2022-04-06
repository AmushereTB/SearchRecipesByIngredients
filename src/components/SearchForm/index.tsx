import React, {useEffect, useRef, useLayoutEffect} from 'react';
import './SearchForm.css'

interface Props {
    setSearchTermOne(input: string): void;
    setSearchTermTwo(input: string): void;
    setSearchTermThree(input: string): void;
}

const SearchForm = ({setSearchTermOne, setSearchTermTwo, setSearchTermThree} : Props) => {
    const searchValueOne = useRef<HTMLInputElement | null>(null);
    const searchValueTwo = useRef<HTMLInputElement | null>(null);
    const searchValueThree = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (searchValueOne && searchValueOne.current){
            searchValueOne.current.focus();
        }
    }, []);
    const handleSubmit = (e : any) => {
      e.preventDefault();
    }
    
    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>search ingredients here</label>
                    <div className="input-control">
                        <input 
                            type="text"
                            name="ingredientOne"
                            id="ingredientOne"
                            placeholder="Ingredient One"
                            ref={searchValueOne}
                            onChange={() => {
                                if (searchValueOne && searchValueOne.current)
                                    setSearchTermOne(searchValueOne.current.value.charAt(0).toUpperCase() + searchValueOne.current.value.slice(1))
                            }}
                        />                
                        <input 
                            type="text"
                            name="ingredientTwo"
                            id="ingredientTwo"
                            placeholder="Ingredient Two"
                            ref={searchValueTwo}
                            onChange={() => {
                                if (searchValueTwo && searchValueTwo.current)
                                    setSearchTermTwo(searchValueTwo.current.value.charAt(0).toUpperCase() + searchValueTwo.current.value.slice(1))
                            }}
                        />               
                        <input 
                            type="text"
                            name="ingredientThree"
                            id="ingredientThree"
                            placeholder="Ingredient Three"
                            ref={searchValueThree}
                            onChange={() => {
                                if (searchValueThree && searchValueThree.current)
                                    setSearchTermThree(searchValueThree.current.value.charAt(0).toUpperCase() + searchValueThree.current.value.slice(1))
                            }}
                        />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
