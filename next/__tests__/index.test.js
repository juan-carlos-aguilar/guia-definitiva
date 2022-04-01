import { render, screen } from '@testing-library/react'
import Index from '../pages/index';

describe('Index', () => {

    describe('Component', () => {
        it('se renderiza', () => {
            render(
                <Index pokemones={[{ name: 'Carlos', url: '/pokemon/detalle/1' }]} />
            )

            const paragraph = screen.getByTestId('titulo')
            expect(paragraph).toBeInTheDocument()

            const carlos = screen.getByText('Carlos')
            expect(carlos).toBeInTheDocument();
            const url= carlos.getAttribute('href')
            expect(url).toEqual('/pokemones/1')
        })
    })

    describe('getStaticProps', () => {
        
    })
})