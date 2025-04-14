import { Link, useLocation } from 'react-router-dom';

const BottomNavbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: 'ri-home-3-line', activeIcon: 'ri-home-fill', label: 'Home' },
    { path: '/quotes', icon: 'ri-chat-quote-line', activeIcon: 'ri-chat-quote-fill', label: 'Quotes' },
    { path: '#', icon: 'ri-image-line', activeIcon: 'ri-image-fill', label: 'Photos' },
    { path: '#', icon: 'ri-play-circle-line', activeIcon: 'ri-play-circle-fill', label: 'Videos' },
    { path: '#', icon: 'ri-apps-line', activeIcon: 'ri-apps-fill', label: 'More' }
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
      <div className="flex justify-around items-stretch py-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex-1 flex flex-col items-center justify-center p-1 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <i className={`text-lg ${isActive ? item.activeIcon : item.icon}`}></i>
              <span className="text-[10px] leading-tight mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;