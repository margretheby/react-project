import { render, screen } from '@testing-library/react';
import Nav from '../../components/Nav/Nav.jsx'

describe('Navigation', () => {
  test('displays correctly', () => {
    render(
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
    )
    screen.debug();
  })
});
