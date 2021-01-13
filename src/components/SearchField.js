import React from 'react';

class SearchField extends React.Component {


/*
search bar
user input search bar
button for search bar
check user input
check if user inputted
*/


    state = {
        search: "",
        isEmpty: true
    }

    onSubmit = (input) =>{
        input.preventDefault();
     
        if(this.state.search === ""){
            this.setState({isEmpty: true});
            this.props.searchGifs(this.state.search);
        }
        else{
             this.setState({isEmpty: false});
             this.props.searchGifs(this.state.search, 0);
        }
    }

    onChange = (input) =>{
        this.setState({[input.target.name]: input.target.value,  isEmpty: true});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' 
                name="search" 
                value={this.state.search} 
                onChange={this.onChange} 
                placeholder={this.state.isEmpty ? "Search..." : this.state.search}/>
                <input type='submit' value="submit"/>
                </form>
                
            </div>
        )
    }
}


export default SearchField;