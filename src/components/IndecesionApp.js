import React from 'react';
import Addoption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecesionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.state = {
            options: [],
            selectedOption: undefined
        };
    }

componentDidMount() {
    try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
    
        if(options) {
            this.setState(() => ({ options }));
          }
       } catch (e) {
       }
}

componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }
}

    handleDeleteOptions() {
        this.setState(() => ({options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handleClearSelectedOption() {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption:option
        }))
    }
    handleAddOption(option) {
        if(!option){
            return 'Enter the valid value'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }
        this.setState((prevState) => ({options: prevState.options.concat([option]) }));
    }
    render() {
        const title = 'Random Picker';
        const subtitle = 'Cant decide? Your at the right place!';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption} 
                        />
                        <Addoption
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecesionApp;