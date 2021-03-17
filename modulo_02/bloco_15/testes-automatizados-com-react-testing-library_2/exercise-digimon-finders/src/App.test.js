import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {
  afterEach(() => jest.clearAllMocks());

  it('renders App', async () => {
    const { getByText, getByTestId } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    const button = getByTestId('buttonSearch')
    const input = getByTestId('input')

    expect(linkElement).toBeInTheDocument();
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  });

  it('test the button', async () => {
    const digimon = [{
      name: 'Greymon',
      level: 'Champion',
      img: 'https://digimon.shadowsmith.com/img/greymon.jpg',
    }];

    const fetchApi = global.fetch = jest.fn(async () => ({
      json: async () => digimon,
    }));

    const { getByTestId, findByText, getByAltText } = render(<App />);
    const input = getByTestId('input')
    const button = getByTestId('buttonSearch')

    fireEvent.change(input, { target: { value: "greymon" } })
    fireEvent.click(button)

    await findByText('Greymon') // espera o elemento ser encontrado para continuar

    expect(getByTestId('digimonName')).toBeInTheDocument()
    expect(getByTestId('digimonLevel')).toBeInTheDocument()
    expect(getByAltText('Greymon')).toBeInTheDocument()

    expect(fetchApi).toBeCalledTimes(1);
    expect(fetchApi).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/greymon'
    );
  })
});
