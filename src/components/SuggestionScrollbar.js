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
    gst: '0%',
    id:'5'
  },
  {
    name: 'Other live animal such as Mammals, Birds, Insects',
    gst: '0%',
    id:'6'
  },
  {
    name: 'Meat of bovine animals, fresh and chilled',
    gst: '0%',
    id:'7'
  },
  {
    name: 'Meat of bovine animals frozen [other than frozen and put up in unit container]',
    gst: '0%',
    id:'8'
  },
  {
    name: 'Meat of swine, fresh, chilled or frozen [other than frozen and put up in unit container]',
    gst: '0%',
    id:'9'
  },
  {
    name: 'Meat of sheep or goats, fresh, chilled or frozen [other than frozen and put up in unit container]',
    gst: '0%',
    id:'10'
  },
  {
    name: 'Meat of horses, asses, mules or  hinnies, fresh, chilled or frozen [other than frozen and put up in unit container]',
    gst: '0%',
    id:'11'
  },
  {
    name: 'Edible offal of bovine animals, swine, sheep, goats, horses, asses, mules or hinnies, fresh, chilled or frozen [other than frozen and put up in unit container',
    gst: '0%',
    id:'12'
  },
  {
    name: 'Meat and edible offal, of the poultry of heading 0105, fresh, chilled or frozen [other than frozen and put up in unit container] ',
    gst: '0%',
    id:'13'
  },
  {
    name: 'Other meat and edible meat offal, fresh, chilled or frozen [other than frozen and put up in unit container]',
    gst: '0%',
    id:'14'
  },
  {
    name: 'Pig fat, free of lean meat, and poultry fat, not rendered or otherwise  extracted, fresh, chilled or frozen [other than frozen and put up in unit container]',
    gst: '0%',
    id:'15'
  },
  {
    name: 'Pig fat, free of lean meat, and poultry fat, not rendered or otherwise extracted, salted, in brine, dried or smoked [other than put up in unit containers]',
    gst: '0%',
    id:'16'
  },
  {
    name: 'Meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal, other than put up in unit containers ',
    gst: '0%',
    id:'17'
  },
  {
    name: 'Fish seeds, prawn / shrimp seeds whether or not processed, cured or in frozen state [other than goods falling under Chapter 3 and attracting 5%]',
    gst: '0%',
    id:'18'
  },
  {
    name: 'Live fish',
    gst: '0%',
    id:'19'
  },
  {
    name: 'Fish, fresh or chilled, excluding fish fillets and other fish meat of heading 0304',
    gst: '0%',
    id:'20'
  },
  {
    name: 'Fish fillets and other fish meat (whether or not minced), fresh or chilled',
    gst: '0%',
    id:'21'
  },
  {
    name: 'Crustaceans, whether in shell or not, live, fresh or chilled; crustaceans, in shell, cooked by steaming or by boiling in water live, fresh or chilled.',
    gst: '0%',
    id:'22'
  },
  {
    name: 'Molluscs, whether in shell or not, live, fresh, chilled; aquatic invertebrates other than crustaceans and molluscs, live, fresh or chilled',
    gst: '0%',
    id:'23'
  },
  {
    name: 'Aquatic invertebrates other than  crustaceans and molluscs, live,  fresh or chilled',
    gst: '0%',
    id:'24'
  },
  {
    name: 'Fresh milk and pasteurised milk, including separated milk, milk and cream, not concentrated nor containing added sugar or other sweetening matter, excluding Ultra High Temperature (UHT) milk',
    gst: '0%',
    id:'25'
  },
  {
    name: 'Curd; Lassi; Butter milk ',
    gst: '0%',
    id:'26'
  },
  {
    name: 'Chena or paneer, other than put up in unit containers and bearing a registered brand name',
    gst: '0%',
    id:'27'
  },
  {
    name: 'Birds\' eggs, in shell, fresh, preserved or cooked',
    gst: '0%',
    id:'28'
  },
  {
    name: 'Natural honey, other than put up in unit container and bearing a registered brand nam',
    gst: '0%',
    id:'29'
  },
  {
    name: 'Human hair, unworked, whether or not washed or scoured; waste of human hair',
    gst: '0%',
    id:'30'
  },
  {
    name: 'All goods i.e. Bones and horn-cores, unworked, defatted, simply prepared (but not cut to shape), treated with acid or gelatinised; powder and waste of these products',
    gst: '0%',
    id:'31'
  },
  {
    name: 'All goods i.e. Hoof meal; horn meal; hooves, claws, nails and beaks; antlers; etc.',
    gst: '0%',
    id:'32'
  },
  {
    name: 'Semen including frozen semen',
    gst: '0%',
    id:'33'
  },
  {
    name: 'Live trees and other plants; bulbs, roots and the like; cut flowers and ornamental foliage',
    gst: '0%',
    id:'34'
  },
  {
    name: 'Potatoes, fresh or chilled.',
    gst: '0%',
    id:'35'
  },
  {
    name: 'Tomatoes, fresh or chilled',
    gst: '0%',
    id:'36'
  },
  {
    name: 'Onions, shallots, garlic, leeks and other alliaceous vegetables, fresh or chilled',
    gst: '0%',
    id:'37'
  },
  {
    name: 'Cabbages, cauliflowers, kohlrabi, kale and similar edible brassicas, fresh or chilled.',
    gst: '0%',
    id:'38'
  },
  {
    name: 'Lettuce (Lactuca sativa) and chicory (Cichorium spp.), fresh or chilled',
    gst: '0%',
    id:'39'
  },
  {
    name: 'Carrots, turnips, salad beetroot, salsify, celeriac, radishes and similar edible roots, fresh or chilled',
    gst: '0%',
    id:'40'
  },
  {
    name: 'Cucumbers and gherkins, fresh or chilled',
    gst: '0%',
    id:'41'
  },
  {
    name: 'Leguminous vegetables, shelled or unshelled, fresh or chilled',
    gst: '0%',
    id:'42'
  },
  {
    name: 'Other vegetables, fresh or chilled',
    gst: '0%',
    id:'43'
  },
  {
    name: 'Dried vegetables, whole, cut, sliced, broken or in powder, but not further prepared',
    gst: '0%',
    id:'44'
  },
  {
    name: 'Dried leguminous vegetables, shelled, whether or not skinned or spli',
    gst: '0%',
    id:'45'
  },
  {
    name: 'Manioc, arrowroot, salep, Jerusalem artichokes, sweet potatoes and similar roots and tubers with high starch or inulin content, fresh or chilled; sago pit',
    gst: '0%',
    id:'46'
  },
  {
    name: 'Coconuts, fresh or dried, whether or not shelled or peeled',
    gst: '0%',
    id:'47'
  },
  {
    name: 'Brazil nuts, fresh, whether or not shelled or peeled',
    gst: '0%',
    id:'48'
  },
  {
    name: 'Other nuts, Other nuts, fresh such as Almonds, Hazelnuts or filberts (Coryius spp.), walnuts, Chestnuts (Castanea spp.), Pistachios, Macadamia nuts, Kola nuts (Cola spp.), Areca nuts, fresh, whether or not shelled or peeled',
    gst: '0%',
    id:'49'
  },
  {
    name: 'Bananas, including plantains, fresh or dried',
    gst: '0%',
    id:'50'
  },
  {
    name: 'Dates, figs, pineapples, avocados, guavas, mangoes and mangosteens, fresh',
    gst: '0%',
    id:'51'
  },
  {
    name: 'Citrus fruit, such as Oranges, Mandarins (including tangerines and satsumas); clementines, wilkings and similar citrus hybrids, Grapefruit, including pomelos, Lemons (Citrus limon, Citrus limonum) and limes (Citrus aurantifolia, Citrus latifolia), fresh',
    gst: '0%',
    id:'52'
  },
  {
    name: 'Grapes, fresh',
    gst: '0%',
    id:'53'
  },
  {
    name: 'Melons (including watermelons) and papaws (papayas), fresh',
    gst: '0%',
    id:'54'
  },
  {
    name: 'Apples, pears and quinces, fresh',
    gst: '0%',
    id:'55'
  },
  {
    name: 'Apricots, cherries, peaches (including nectarines), plums and sloes, fresh',
    gst: '0%',
    id:'56'
  },
  {
    name: 'Other fruit such as strawberries, raspberries, blackberries, mulberries and loganberries, black, white or red currants and gooseberries, cranberries, bilberries and other fruits of the genus vaccinium, Kiwi fruit, Durians, Persimmons, Pomegranates, Tamarind, Sapota (chico), Custard-apple (ata), Bore, Lichi, fresh',
    gst: '0%',
    id:'57'
  },
  {
    name: 'Peel of citrus fruit or melons (including watermelons), fresh',
    gst: '0%',
    id:'58'
  },
  {
    name: 'All goods of seed quality',
    gst: '0%',
    id:'59'
  },
  {
    name: 'Coffee beans, not roasted',
    gst: '0%',
    id:'60'
  },
  {
    name: 'Unprocessed green leaves of tea',
    gst: '0%',
    id:'61'
  },
  {
    name: 'Seeds of anise, badian, fennel, coriander, cumin or caraway; juniper berries [of seed quality]',
    gst: '0%',
    id:'62'
  },
  {
    name: 'Fresh ginger, other than in processed form',
    gst: '0%',
    id:'63'
  },
  {
    name: 'Fresh turmeric, other than in processed form',
    gst: '0%',
    id:'64'
  },
  {
    name: 'Wheat and meslin [other than those put up in unit container and bearing a registered brand name]',
    gst: '0%',
    id:'65'
  },
  {
    name: 'Rye [other than those put up in unit container and bearing a registered brand name]',
    gst: '0%',
    id:'66'
  },
  {
    name: 'Barley [other than those put up in unit container and bearing a registered brand name]',
    gst: '0%',
    id:'67'
  },
  {
    name: 'Oats [other than those put up in unit container and bearing a registered brand name]',
    gst: '0%',
    id:'68'
  },
  {
    name: 'Maize (corn) [other than those put up in unit container and bearing a registered brand name]',
    gst: '0%',
    id:'69'
  },
  {
    name: 'Rice [other than those put up in unit container and bearing a registered brand name]',
    gst: '0%',
    id:'70'
  },
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