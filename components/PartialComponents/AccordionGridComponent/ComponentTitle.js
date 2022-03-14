const ComponentTitle = ({ data }) => {
  const title1 = data.title1;
  return (
    <div className="componentTitle">
      <h3>
        {data.title}
        {title1 && <span>{title1}</span>}
      </h3>
      <p>{data.content}</p>
    </div>
  );
};

export default ComponentTitle;
