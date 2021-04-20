
import React from 'react'
import {shallow} from 'enzyme';

import Footer from './index'
describe("renderizar componente", () => {
    it("render footer without problem", () => {
        shallow(<Footer />)
    })

    it("find the univision word in the footer", () => {
       const wrapper = shallow(<Footer  />);
       expect(wrapper.find('p').text()).toContain('All copyright @Univision'); 
    })
    
})

