import { render } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('ScrollToTop Component', () => {
  let scrollToSpy;

  beforeEach(() => {
    // Mockear window.scrollTo
    scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should scroll to the top when the pathname changes', () => {
    useLocation.mockReturnValue({ pathname: '/new-path' });

    render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>
    );

    // Simular el tiempo para que se ejecute el setTimeout
    jest.runAllTimers();

    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
  });

  it('should not scroll to top if the pathname remains the same', () => {
    useLocation.mockReturnValue({ pathname: '/same-path' });

    render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>
    );

    jest.runAllTimers();

    // No debería llamarse a window.scrollTo si la ruta no cambia
    expect(scrollToSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear timeout on component unmount', () => {
    useLocation.mockReturnValue({ pathname: '/test-path' });

    const { unmount } = render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>
    );

    // Simular desmontaje del componente
    unmount();

    // No debería llamar a window.scrollTo después del desmontaje
    expect(scrollToSpy).not.toHaveBeenCalled();
  });
});