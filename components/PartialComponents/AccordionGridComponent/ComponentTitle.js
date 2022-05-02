const ComponentTitle = ({ data, isNeu }) => {
  const title1 = data.title1;
  return (
    <div
      className={
        isNeu
          ? "componentTitle text-lightGrey-300"
          : "componentTitle text-darkGrey-900"
      }
    >
      <h3>
        {data.title}
        {title1 && <span>{title1}</span>}
      </h3>
      <p>{data.content}</p>
    </div>
  );
};

export default ComponentTitle;
