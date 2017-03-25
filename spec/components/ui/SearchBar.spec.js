import React from 'react';
import Autocomplete from 'react-autocomplete';

import SearchBar from 'components/ui/SearchBar';

describe('<SearchBar />', () => {
  const defaultProps = {
    value: '',
    onChange: i => i,
    onSelect: i => i,
    items: []
  };

  const buildSearchBar = (props = {}) => (
    <SearchBar {...defaultProps} {...props} />
  );

  it('renders an Autocomplete element', () => {
    const wrapper = shallow(buildSearchBar());
    expect(wrapper.find(Autocomplete)).to.have.length(1);
  });

  describe('Autocomplete rendered', () => {
    it('receives a `getItemValue` prop which returns the label attribute of items based in `itemLabel` prop', () => {
      const wrapper = shallow(buildSearchBar({
        itemLabel: 'label'
      }));
      const { getItemValue } = wrapper.find(Autocomplete).props();
      
      expect(getItemValue({ id: 1, label: 'Test #1'})).to.be.equals('Test #1');
    });

    it('receives the `value` prop equals to the `value` prop of the SearchBar', () => {
      const wrapper = shallow(buildSearchBar({ value: 'Term of search' }));
      const autocomplete = wrapper.find(Autocomplete);
      
      expect(autocomplete.props().value).to.be.equal('Term of search');
    });

    describe('when the `renderItem` prop is called', () => {
      const item = { id: 1, label: 'Test #1' };
      let itemRendered;

      beforeEach(() => {
        const key = 'id';
        const label = 'label';
        const wrapper = shallow(buildSearchBar({ itemKey: key, itemLabel: label }));
        const { renderItem } = wrapper.find(Autocomplete).props();

        itemRendered = shallow(renderItem(item));
      })

      it('renders a div with a key equals to the key attribute of items based in `itemKey` prop', () => {        
        expect(itemRendered.find('div').key()).to.be.equal('1');
      });

      it('contains the label attribute of items based in `itemLabel` prop', () => {
        expect(itemRendered.contains('Test #1')).to.be.true;
      });
    });

    describe('when the `onChange` prop is called', () => {
      it('calls the `onChange` prop with the new value as first param and the Event object as second one', () => {
        const onChangeSpy = spy();
        const wrapper = shallow(buildSearchBar({ onChange: onChangeSpy }));
        const autocomplete = wrapper.find(Autocomplete);

        const newValue = 'New Value';
        const event = new window.Event('change');
        autocomplete.simulate('change', event, newValue);

        expect(onChangeSpy.calledWith(newValue, event)).to.be.true;
      });
    });

    describe('when the `onSelect` prop is called', () => {
      it('calls the `onSelect` prop with the item selected as first param', () => {
        const onSelectSpy = spy();
        const wrapper = shallow(buildSearchBar({ onSelect: onSelectSpy }));
        const autocomplete = wrapper.find(Autocomplete);

        const itemSelected = { id: 1, label: 'Item selected' };
        const value = 'Item';
        autocomplete.simulate('select', value, itemSelected);

        expect(onSelectSpy.calledWith(itemSelected)).to.be.true;
      });
    });
  });
});
