const { default: Link } = require('./Link');

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="accordion" className="item">
        Accordion
      </Link>
      <Link href="weather" className="item">
        Weather
      </Link>
      <Link href="dropdown" className="item">
        Dropdown
      </Link>
    </div>
  );
};

export default Header;
