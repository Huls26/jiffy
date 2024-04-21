import {
  describe, it, expect,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import FilterBtn from '../FilterBtn';

describe.skip('FilterBtn', () => {
  it('should apply the active style based on the text prop value', () => {
    const activeStyle = (text) => (text === 'Photos' ? 'bg-green' : 'bg-yellow-1');
    render(<FilterBtn text="Photos" activeStyle={activeStyle} />);

    const btn = screen.getByRole('button');
    expect(activeStyle).toHaveBeenCalledWith('Photos');
    expect(btn).toHaveClass('bg-green');

    activeStyle.mockImplementation((text) => (text === 'Photos' ? 'bg-blue' : 'bg-yellow-1'));
    render(<FilterBtn text="Text Content" activeStyle={activeStyle} />);

    expect(activeStyle).toHaveBeenCalledWith('Text Content');
    expect(btn).toHaveClass('bg-blue');
  });
});
