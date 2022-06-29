const ComponentTitle = ({ data, isNeu }) => {
  const { title, title1, content } = data;

  return (
    <div
      className={
        isNeu
          ? "componentTitle text-lightGrey-300"
          : "componentTitle text-darkGrey-900"
      }
    >
      <h3>
        {title}
        <span>{title1}</span>
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default ComponentTitle;
