import { useSelector } from "react-redux";

function Header() {
  const navItems = useSelector((store) => store.content.navItems);
  return (
    <header className="absolute top-0 left-0 z-10 w-full py-12">
      <div className="flex justify-between items-center m-auto px-8">
        <nav className="flex flex-1 items-center">
          <ul className="flex flex-1 item-center justify-start">
            {navItems.map((item) => (
              <li key={item.anchor} className="text-lg py-0 px-4">
                <a href={item.anchor} className="text-white">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <img src="" alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">UK</a>
          </li>
          <li>
            <a href="#">EN</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
