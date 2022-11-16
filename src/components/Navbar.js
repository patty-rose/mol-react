import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Enter Site</Link>
      <Link to='/admin'>Admin Home</Link>
      <Link to='/admin/addPage'>Add Page</Link>
    </nav>
  );
};
export default Navbar;