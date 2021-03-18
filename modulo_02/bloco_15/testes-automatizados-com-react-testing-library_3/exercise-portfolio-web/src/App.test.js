import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';

describe('Testes da página Home', () => {
  it('Testanto se os links existem', () => {
    const { getByText } = render(<App />);
    const linkToProjects = getByText('Projetos');
    const linkToContact = getByText('Contato');
    const linkToAbout = getByText('Sobre');

    expect(linkToProjects).toBeInTheDocument();
    expect(linkToContact).toBeInTheDocument();
    expect(linkToAbout).toBeInTheDocument();
  });

  it('Testando se o link Projetos redireciona para /projects', () => {
    const { getByTestId, history } = renderWithRouter(<App />);
    const linkToProjects = getByTestId('projects-link');

    fireEvent.click(linkToProjects)
    console.log(history.location.pathname)


    expect(history.location.pathname).toBe('/projects')
  })
});
