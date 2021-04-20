import React from 'react'
import {shallow,mount} from 'enzyme';
import FormUpload from './index'
import { render, screen } from '@testing-library/react';

describe("renderizar componente", () => {
   

    it("render Form to upload component without crashing", () => {
        
        render(<FormUpload />);
        const linkElement = screen.getByText(/Please select the file you desire to upload/i);
        expect(linkElement).toBeInTheDocument();
    }); 
    
    


   


    
})

