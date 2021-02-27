import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ items }) => {
  const [selected, setSelected] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (ref.current && ref.current.contains(e.target)) return;
      
      setVisibility(false);
    };

    if (!visibility) return; // click listener won't be added if visibility is false

    document.body.addEventListener('click', onBodyClick);
    return () => document.body.removeEventListener('click', onBodyClick);
  }, [visibility]);

  const renderedItems = items.map(item => (
    <div onClick={() => setSelected(item)} key={item.label} className="item">
      {item.label}
    </div>
  ));

  return (
    <div
      ref={ref}
      onClick={() => setVisibility(!visibility)}
      className={`ui selection dropdown ${visibility ? 'active visible' : ''}`}>
      <i className="dropdown icon"></i>
      <div className="default text">
        {selected?.label ?? 'Select An Option'}
      </div>
      <div className={`menu ${visibility ? 'transition visible' : ''}`}>
        {renderedItems}
      </div>
    </div>
  );
};

export default Dropdown;
