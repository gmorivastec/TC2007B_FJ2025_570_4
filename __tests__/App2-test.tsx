import { fireEvent, render } from '@testing-library/react-native';

// A FUERZAS, INDISPENSABLE
// importar módulo que estoy probando
import App, { suma } from '../App';

describe(
    '<App /> con botonazo',
    () => {
        test(
            'Matchers',
            () => {
                // vamos a empezar a usar matchers!
                // https://jestjs.io/docs/using-matchers
                expect(1 + 1).toBe(2);
                expect(suma(3,2)).toBe(5);
                expect(1 + 1).not.toBe(3);
                expect(3 + 5).toBeGreaterThan(4);
            }
        );
        test(
            'Presionado de botoncito',
            () => {
                const { getByText, getByTestId } = render(<App />);

                // obtener referencia al componente que muestra el resultado de un botonazo
                const cuentaText = getByTestId('cuenta');

                // vamos a empezar a usar matchers!
                // https://jestjs.io/docs/using-matchers
                expect(cuentaText.props.children).toBe(0);

                // obtenemos referencia a otro componente
                const button = getByText('Incrementar');

                // podemos ejecutar eventos de GUI desde el script
                fireEvent.press(button);

                // una vez ejecutemos los eventos de GUI comprobamos resultados
                // con matchers
                expect(cuentaText.props.children).toBe(1);
            }
        );
    }
);