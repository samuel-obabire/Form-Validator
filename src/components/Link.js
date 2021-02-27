const Link = ({ href, children, className }) => {
  return (
    <a
      className={className}
      href={href}
      onClick={e => {
        e.preventDefault();
        window.history.pushState({}, '', href);

        const NavEvent = new PopStateEvent('popstate');
        window.dispatchEvent(NavEvent);
      }}>
      {children}
    </a>
  );
};

export default Link;
