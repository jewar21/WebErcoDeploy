const Steps = ({ dataSteps }) => {
  const title = dataSteps.title;
  const content = dataSteps.steps;
  return (
    <section>
      <h3>{title}</h3>
      <div>
        {content.map((steps, index) => (
          <div key={index}>
            <h3>{steps.number}</h3>
            <p>{steps.description}</p>
            <spam>{steps.info}</spam>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
