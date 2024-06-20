import {
  describe, it, expect, vi,
} from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ContentBtn from '../ContentBtn';

describe('ContentBtn', () => {
  it('renders correctly', () => {
    const { container } = render(<ContentBtn text="Submit" />);

    expect(container).toMatchSnapshot();
  });

  it('calls the onClick prop when clicked', () => {
    // eslint-disable-next-line no-undef
    const onClick = vi.fn();
    const { container } = render(<ContentBtn text="Submit" onClick={onClick} />);

    fireEvent.click(container.querySelector('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
