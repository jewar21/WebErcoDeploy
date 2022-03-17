const TitleContent = ({ headerData }) => {
  return (
    <section className="TitleContent">
      <h3>{headerData.title}</h3>
      <p>{headerData.content}</p>
    </section>
  );
};

export default TitleContent;
