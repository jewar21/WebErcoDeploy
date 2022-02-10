const ComponentTitle = ({ headContent }) => {
  return (
    <div className="componentTitle">
      <h3>
        {headContent.title}
        <span>{headContent.title1}</span>
      </h3>
      <p>{headContent.content}</p>
    </div>
  );
};

export default ComponentTitle;
