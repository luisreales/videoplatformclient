import React from 'react'
import {shallow} from 'enzyme';
import Detail from './index'



describe("renderizar componente", () => {
    it("render DetailVideo component without crashing", () => {
       
        shallow(<Detail />)
    });   

    it("find the univision word in the footer", () => {
        const wrapper = shallow(<Detail  />);
        expect(wrapper.find('p').text()).toContain('Video Uploaded'); 
     })

})

