import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react';
import './SearchFields.css';

const ServicesArray = [
  {
    name: 'Services by an entity registered under section 12AA of the Income-tax Act, 1961 (43 of 1961) by way of charitable activities.',
    gst:'0%',
    id:'1'
  },
  {
    name: 'Services by way of transfer of a going concern, as a whole or an independent part thereof',
    gst:'0%',
    id:'2'
  },
  {
    name: 'Pure services (excluding works contract service or other composite supplies involving supply of any goods) provided to the Central Government, State Government or Union territory or local authority or a Governmental authority by way of any activity in relation to any function entrusted to a Panchayat under article 243G of the Constitution or in relation to any function entrusted to a Municipality under article 243W of the Constitutio',
    gst:'0%',
    id:'3'
  },
  {
    name: 'Services by Central Government, State Government, Union territory, local authority or governmental authority by way of any activity in relation to any function entrusted to a municipality under article 243 W of the Constitution',
    gst:'0%',
    id:'4'
  },
  {
    name: 'Services by a governmental authority by way of any activity in relation to any function entrusted to a Panchayat under article 243G of the Constitution',
    gst:'0%',
    id:'5'
  }
  
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return ServicesArray.filter(service => regex.test(service.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

export class ServicesComponent extends React.Component {
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
      placeholder: "Enter the service here...",
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

export default ServicesComponent;