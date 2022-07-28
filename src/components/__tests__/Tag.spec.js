import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/vue';
import Tag from '../Tag';

const renderComponent = (text, { props } = {}) =>
    render(Tag, {
        props,
        slots: { default: text },
    });

it('renders default tag with proper classes', () => {
    const textInsideTag = 'alice';
    renderComponent(textInsideTag);

    expect(screen.getByText(textInsideTag)).toHaveClass('info', 'medium');
    expect(screen.getByText(textInsideTag)).not.toHaveClass('123', 'medium');
});
