const Steps = ({ dataSteps }) => {
  const title = dataSteps.title;
  const content = dataSteps.steps;
  return (
    <section className="stepsContainer">
      <div className="stepsContent">
        <h3>{title}</h3>
        <div className="steps">
          {content.map((step, index) => (
            <div className="stepInfo" key={index}>
              <h3>{step.number}</h3>
              <p>{step.description}</p>
              <span>{step.info}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
