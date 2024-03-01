import { CalendarDays, Folder, HeartCrack, Home, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
const navs = [
  {
    name: 'Home',
    icon: <Home className="w-5 h-5" />,
    path: '/',
  },
  {
    name: 'Medicaments',
    icon: <Pill className="w-5 h-5" />,
    path: '/medciaments',
  },
  {
    name: 'Records',
    icon: <Folder className="w-5 h-5" />,
    path: '/records',
  },
  {
    name: 'Calender',
    icon: <CalendarDays className="w-5 h-5" />,
    path: '/calender',
  },
  {
    name: 'Side Effects',
    icon: <HeartCrack className="w-5 h-5" />,
    path: '/side-effects',
  },
];
function Nav() {
  return (
    <div className="p-2 pt-4 ">
      <div className="flex flex-row justify-around items-center w-full -bottom-2">
        {navs.map((elm, i) => (
          <Link
            className={`flex items-center flex-col space-y-1`}
            key={'nav' + i}
            to={elm.path}
          >
            <span
              className={` ${
                location.pathname === elm.path ? 'text-primary' : 'text-[#808080]'
              }`}
            >
              {elm.icon}
            </span>
            <span
              className={`text-sm  font-medium ${
                location.pathname === elm.path
                  ? 'text-primary font-semibold'
                  : 'text-[#808080]'
              }`}
            >
              {elm.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
