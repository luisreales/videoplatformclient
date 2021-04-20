import React from 'react'
import {shallow} from 'enzyme';
import Message from './index'


describe("renderizar componente", () => {
    it("render message component without crashing", () => {
        const mockmessage = {
            show:true,
            typeerror:true,
            type:'error',
            title:'Sorry, we have fail with the server connection',
            titlemensaje:'Upps! We have problem to upload your video in this moment. We invite you to try again later.'          
          
        }
        shallow(<Message message={mockmessage} />)
    });

    it("render footer success message", () => {
        const mockmessage = {
            show:true,
            typeerror:false,
            type:'success',
            title: 'Super! You has upload your file successfully!!!',
            titlemensaje:'We invite you to visit the loaded videos page'          
          
        }

        const wrapper = shallow(<Message message={mockmessage} />);       
        //expect(wrapper.contains(parragrahp)).toContain("Super");
        expect(wrapper.find('p').text()).toContain('We invite you to visit the loaded videos page');


    });

    it("render fail message connection", () => {
        const mockmessage = {
            show:true,
            typeerror:true,
            type:'error',
            title:'Sorry, we have fail with the server connection',
            titlemensaje:'Upps! We have problem to upload your video in this moment. We invite you to try again later.'          
          
        }
        const wrapper = shallow(<Message message={mockmessage} />);
       
        //expect(wrapper.contains(parragrahp)).toContain("Super");
        expect(wrapper.find('p').text().substr(0,4)).toContain('Upps');

        
    });


    


})

