import React from 'react';
import ListVideo from './index';
import { render, screen } from '@testing-library/react';


describe("renderizar componente", () => {
   
    it("render DetailVideo component without crashing", () => {
       
        render(<ListVideo />);
        const linkElement = screen.getByText(/List of videos/i);
        expect(linkElement).toBeInTheDocument();
    });

    it("see button for show the video", () => {
       
        render(<ListVideo />);
        const linkElement = screen.getByText(/See Video/i);
        expect(linkElement).toBeInTheDocument();
    });
    

})



