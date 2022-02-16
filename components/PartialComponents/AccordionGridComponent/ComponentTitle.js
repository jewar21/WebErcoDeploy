const ComponentTitle = ({ headContent }) => {
  const title1 = headContent.title1;
  return (
    <div className="componentTitle">
      <h3>
        {headContent.title}
        {title1 && <span>{title1}</span>}
      </h3>
      <p>{headContent.content}</p>
    </div>
  );
};

export default ComponentTitle;
