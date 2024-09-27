import { Link } from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr"; // Importing the admin icon

const Navbar = () => {
  return (
    <nav className="bg-[#0d4a8c] p-4 shadow-md"> {/* Deep blue background color */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://www.dealsdray.com/wp-content/uploads/2023/11/logo_B2R.png"
              alt="DealsDray Logo"
              className="h-16 rounded-full shadow-lg" // Adjust height as needed
            />
          </Link>
          <h1 className="text-white text-2xl font-bold ml-2">DealsDray</h1>
        </div>
        <ul className="flex space-x-6">
          <li className="flex items-center">
            <GrUserAdmin className="text-white mr-1" /> {/* Admin icon */}
            <Link
              to="/admin"
              className="text-white font-bold hover:text-[#f58c1f] transition duration-300" // Orange hover color
            >
              Admin
            </Link>
          </li>
          <li>
            <Link
              to="/employees"
              className="text-white font-bold hover:text-[#f58c1f] transition duration-300" // Orange hover color
            >
              Employees
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white font-bold hover:text-[#f58c1f] transition duration-300" // Orange hover color
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-white font-bold hover:text-[#f58c1f] transition duration-300" // Orange hover color
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
