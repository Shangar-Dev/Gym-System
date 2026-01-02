import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/months" className="hover:underline">Months</Link></li>
        <li><Link to="/offers" className="hover:underline">Offers</Link></li>
        <li><Link to="/salary" className="hover:underline">Salary</Link></li>
        <li><Link to="/timeout" className="hover:underline">TimeOut</Link></li>
        <li><Link to="/users" className="hover:underline">Users</Link></li>
      </ul>
    </nav>
  );
}