const List = ({ items }) => {
  if (!items.length) return null;

  const renderedItems = Object.entries(items[0]).map(([key, value]) => {
    if (typeof value === 'object') return null;

    return (
      <div className="item" key={key}>
        <div className="content">
          <div className="description">
            <div>
              <b>{key}:</b>
              <span style={{ marginLeft: '1rem' }}>{value}</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui list">
      <img className="ui image" src={items[0].condition.icon} alt={''} />
      <h4>Summary: {items[0].condition.text}</h4>
      {renderedItems}
    </div>
  );
};

export default List;
