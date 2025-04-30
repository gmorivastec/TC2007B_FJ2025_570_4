import { render } from '@testing-library/react-native';

// A FUERZAS, INDISPENSABLE
// importar módulo que estoy probando
import App from '../App';

// las pruebas se organizan en suites
// compuestas por tests
describe(
    '<App />',
    () => {
        test(
            'Textito 1.1',
            () => {
                const { getByText } = render(<App />);

                // no es un matcher pero ya es una prueba 
                // (matchers en un ratito más)
                getByText("Open up App.tsx to start working on your app!");
                getByText("Pruebita!");

            }
        );
        test(
            'Textito 1.2',
            () => {
                const { getByText } = render(<App />);

                // no es un matcher pero ya es una prueba 
                // (matchers en un ratito más)
                getByText("Open up App.tsx to start working on your app!");
                getByText("Pruebita!");

            }
        );
    }
);

describe(
    '<App /> v2',
    () => {
        test(
            'Textito 2.1',
            () => {
                const { getByText } = render(<App />);

                // no es un matcher pero ya es una prueba 
                // (matchers en un ratito más)
                getByText("Pruebita!");

            }
        );
    }
);