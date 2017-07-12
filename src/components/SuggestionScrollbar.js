import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react';
import './SuggestionScrollbar.css';

const GoodsArray = [
  {
    name: 'Live asses, mules and hinnies',
    gst: '0%',
    id:'1'
  },
  {
    name: 'Live bovine animals',
    gst: '0%',
    id:'2'
  },
  {
    name: 'Live swine',
    gst: '0%',
    id:'3'
  },
  {
    name: 'Live sheep and goats',
    gst: '0%',
    id:'4'
  },
  {
    name: ' Live poultry, that is to say, fowls of the species Gallus domesticus, ducks, geese, turkeys and guinea fowls. ',
    gst: '5%',
    id:'5'
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  },
  {
    name: '',
    gst: '',
    id:
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return GoodsArray.filter(product => regex.test(product.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

export class SuggestionScrollbar extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Enter the product here...",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

export default SuggestionScrollbar;