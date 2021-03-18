import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

describe('Testando App', () => {
  it('Testando se a página redireciona pada PageNotFound quando o caminho é invalido', () => {
    const { getByText, history } = renderWithRouter(<App />);

    history.push('/notfound')
    
    console.log(history.location.pathname)

    const pageNotFoundHeader = getByText('Página não encontrada')

    expect(pageNotFoundHeader).toBeInTheDocument()
  })
})

describe('Testando a página PageNotFound', () => {
  it('Testando se a imagem do foguete aparece', () => {
    const { getByAltText } = renderWithRouter(<PageNotFound />)
    const rocketImage = getByAltText('logo')

    expect(rocketImage).toBeInTheDocument()
    expect(rocketImage.className).toBe('App-logo')
    expect(rocketImage.localName).toBe('img')
    expect(rocketImage.src).toBe('http://localhost/logo.svg')
  })

  it('Testando se o texto Página não encontrada existe aparece', () => {
    const { getByText } = renderWithRouter(<PageNotFound />)
    const pageNotFoundHeader = getByText('Página não encontrada')

    expect(pageNotFoundHeader).toBeInTheDocument()
  })

  it('Testando se o link Home existe', () => {
    const { getByText } = renderWithRouter(<PageNotFound />)
    const linkToHome = getByText('Home')

    expect(linkToHome).toBeInTheDocument();
    expect(linkToHome.localName).toBe('a');
  })

  it('Testando se o link Home redireciona para a página Home', () => {
    const { getByText, history } = renderWithRouter(<PageNotFound />)
    const linkToHome = getByText('Home')

    fireEvent.click(linkToHome)

    expect(history.location.pathname).toBe('/')
  })
})

describe('Testes da página Home', () => {
  it('Testando se a imagem do foguete aparece', () => {
    const { getByAltText } = renderWithRouter(<Home />)
    const rocketImage = getByAltText('logo')

    expect(rocketImage).toBeInTheDocument()
    expect(rocketImage.className).toBe('App-logo')
    expect(rocketImage.localName).toBe('img')
    expect(rocketImage.src).toBe('http://localhost/logo.svg')
  })

  it('Testando se o texto Meu portfólio aparece', () => {
    const { getByText } = renderWithRouter(<Home />)
    const homeHeader = getByText('Meu portfólio')

    expect(homeHeader).toBeInTheDocument()
  })

  it('Testanto se os links existem', () => {
    const { getByText } = renderWithRouter(<Home />);
    const linkToProjects = getByText('Projetos');
    const linkToContact = getByText('Contato');
    const linkToAbout = getByText('Sobre');

    expect(linkToProjects).toBeInTheDocument();
    expect(linkToProjects.localName).toBe('a');

    expect(linkToContact).toBeInTheDocument();
    expect(linkToContact.localName).toBe('a');

    expect(linkToAbout).toBeInTheDocument();
    expect(linkToAbout.localName).toBe('a');
  });

  it('Testando se o link Projetos redireciona para /projects', () => {
    const { getByTestId, history } = renderWithRouter(<Home />);
    const linkToProjects = getByTestId('projects-link');

    fireEvent.click(linkToProjects)

    expect(history.location.pathname).toBe('/projects')
  })

  it('Testando se o link Contato redireciona para /projects', () => {
    const { getByTestId, history } = renderWithRouter(<Home />);
    const linkToContact = getByTestId('contact-link');

    fireEvent.click(linkToContact)

    expect(history.location.pathname).toBe('/contact')
  })

  it('Testando se o link Sobre redireciona para /about', () => {
    const { getByTestId, history } = renderWithRouter(<Home />);
    const linkToAbout = getByTestId('about-link');

    fireEvent.click(linkToAbout)

    expect(history.location.pathname).toBe('/about')
  })
});

describe('Testando a página Projects', () => {
  it('Testando se a imagem do foguete aparece', () => {
    const { getByAltText } = renderWithRouter(<Projects />)
    const rocketImage = getByAltText('logo')

    expect(rocketImage).toBeInTheDocument()
    expect(rocketImage.className).toBe('App-logo')
    expect(rocketImage.localName).toBe('img')
    expect(rocketImage.src).toBe('http://localhost/logo.svg')
  })

  it('Testando se o texto Projetos aparece', () => {
    const { getByText } = renderWithRouter(<Projects />)
    const projectsHeader = getByText('Projetos')

    expect(projectsHeader).toBeInTheDocument()
  })

  it('Testando se o link Home existe', () => {
    const { getByText } = renderWithRouter(<Projects />)
    const linkToHome = getByText('Home')

    expect(linkToHome).toBeInTheDocument();
    expect(linkToHome.localName).toBe('a');
  })

  it('Testando se o link Home redireciona para a página Home', () => {
    const { getByText, history } = renderWithRouter(<Projects />)
    const linkToHome = getByText('Home')

    fireEvent.click(linkToHome)

    expect(history.location.pathname).toBe('/')
  })
})

describe('Testando a página Contact', () => {
  it('Testando se a imagem do foguete aparece', () => {
    const { getByAltText } = renderWithRouter(<Contact />)
    const rocketImage = getByAltText('logo')

    expect(rocketImage).toBeInTheDocument()
    expect(rocketImage.className).toBe('App-logo')
    expect(rocketImage.localName).toBe('img')
    expect(rocketImage.src).toBe('http://localhost/logo.svg')
  })

  it('Testando se o texto Contato aparece', () => {
    const { getByText } = renderWithRouter(<Contact />)
    const contactHeader = getByText('Contato')

    expect(contactHeader).toBeInTheDocument()
  })

  it('Testando se o link Home existe', () => {
    const { getByText } = renderWithRouter(<Contact />)
    const linkToHome = getByText('Home')

    expect(linkToHome).toBeInTheDocument();
    expect(linkToHome.localName).toBe('a');
  })

  it('Testando se o link Home redireciona para a página Home', () => {
    const { getByText, history } = renderWithRouter(<Contact />)
    const linkToHome = getByText('Home')

    fireEvent.click(linkToHome)

    expect(history.location.pathname).toBe('/')
  })
})

describe('Testando a página About', () => {
  it('Testando se a imagem do foguete aparece', () => {
    const { getByAltText } = renderWithRouter(<About />)
    const rocketImage = getByAltText('logo')

    expect(rocketImage).toBeInTheDocument()
    expect(rocketImage.className).toBe('App-logo')
    expect(rocketImage.localName).toBe('img')
    expect(rocketImage.src).toBe('http://localhost/logo.svg')
  })

  it('Testando se o texto Contato aparece', () => {
    const { getByText } = renderWithRouter(<About />)
    const aboutHeader = getByText('Sobre')

    expect(aboutHeader).toBeInTheDocument()
  })

  it('Testando se o link Home existe', () => {
    const { getByText } = renderWithRouter(<About />)
    const linkToHome = getByText('Home')

    expect(linkToHome).toBeInTheDocument();
    expect(linkToHome.localName).toBe('a');
  })

  it('Testando se o link Home redireciona para a página Home', () => {
    const { getByText, history } = renderWithRouter(<About />)
    const linkToHome = getByText('Home')

    fireEvent.click(linkToHome)

    expect(history.location.pathname).toBe('/')
  })
})
