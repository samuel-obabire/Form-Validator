import { useState, Fragment } from 'react';

const Accordion = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedList = options.map(option => {
    const active = activeIndex?.text === option.text ? 'active' : '';

    return (
      <Fragment key={option.label}>
        <div
          key={option.text}
          onClick={() => {
            if (activeIndex?.text === option.text) {
              setActiveIndex(null);
            } else {
              setActiveIndex(option);
            }
          }}
          className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {option.label}
        </div>
        <div className={` content ${active}`}>
          <p className="transition visible">{option.text}</p>
        </div>
      </Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedList}</div>;
};

export default Accordion;
