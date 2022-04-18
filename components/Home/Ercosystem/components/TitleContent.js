const TitleContent = ({ headerData }) => {
  return (
    <div className="TitleContent">
      <h3>{headerData.title}</h3>
      <p>{headerData.content}</p>
    </div>
  );
};

export default TitleContent;
