import { useSelector } from "react-redux";

function Footer() {
  const pClass = "text-[1rem] leading-relaxed font-light mb-1";
  const titleClasses = "text-xl mb-4 font-brownReg";
  const linkClasses =
    pClass + " hover:cursor-pointer hover:underline hover:decoration-inherit";

  const navItems = useSelector((store) => store.content.navItems);
  const socialLinks = useSelector((store) => store.content.socialLinks);
  const contacts = useSelector((store) => store.content.contacts);
  return (
    <footer className="py-20 px-0 bg-beige text-base">
      <div className="flex justify-between flex-wrap w-full px-8 mx-0 max-w-screen-lg">
        <div className="flex-[0_0_25%] max-w-[25%] mb-4">
          <p className={titleClasses}>Contacts</p>
          {contacts.map((i) => (
            <p className={pClass} key={i}>
              {i}
            </p>
          ))}
        </div>
        <div className="flex-[0_0_25%] max-w-[25%] mb-4">
          <p className={titleClasses}>Opening hours:</p>
          <p className={pClass}>Monday-Friday 9:00 -18:00h (GMT+2)</p>
        </div>
        <nav className="flex-[0_0_50%] max-w-[50%]">
          <ul className="flex justify-around flex-wrap list-none">
            <li>
              <p className={titleClasses}>Company</p>
              <ul>
                {navItems.map((item) => (
                  <li key={item.anchor} className="mb-1">
                    <a href={item.anchor} className={linkClasses}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p className={titleClasses}>Follow Us</p>
              <ul>
                {socialLinks.map((item) => (
                  <li key={item.id} className="mb-1">
                    <a href={item.link} className={linkClasses}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
