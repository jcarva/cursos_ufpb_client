import React, { PropTypes } from 'react';
import Autocomplete from 'react-autocomplete';

const styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'pointer'
  }
}

const SearchBar = ({
  value,
  onChange,
  onSelect,
  items,
  itemLabel,
  itemKey
}) => (
  <Autocomplete
    value={value}
    onChange={(evt, value) => onChange(value, evt)}
    onSelect={(_value, item) => onSelect(item)}
    items={items}
    getItemValue={(item) => item[itemLabel]}
    renderItem={(item, isHighlighted) => (
      <div
        style={isHighlighted ? styles.highlightedItem : styles.item}
        key={item[itemKey]}
      >{item[itemLabel]}</div>
    )}
  />
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  itemLabel: PropTypes.string,
  itemKey: PropTypes.string
};

SearchBar.defaultProps = {
  itemLabel: 'label',
  itemKey: 'key'
};

export default SearchBar;
