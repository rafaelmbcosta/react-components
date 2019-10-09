import React from 'react';
import { configure, shallow }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserOutput from './UserOutput';

configure({ adapter: new Adapter() });

describe("<UserOutput />", () => {
   it("Should render 'Paragraph !'", () => {
     const wrapper = shallow(<UserOutput username='User name' />);
     expect(wrapper.contains(<p> Paragraph ! </p>)).toEqual(true);
     expect(wrapper.contains(<h3> User name Output </h3>)).toEqual(true);
   });
});
