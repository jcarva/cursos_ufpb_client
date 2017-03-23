import React from 'react';
import SearchBar from 'components/ui/SearchBar';

describe('<SearchBar />', () => {
  it('renders perfectly', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).to.be.defined;
  });
});
