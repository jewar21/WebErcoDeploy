const Steps = () => {
  return (
    <section>
      <h3>Title</h3>
      <div>
        {statisticsErco.map((statistic, index) => (
          <div className="statistics" key={index}>
            <h3>{statistic.number}</h3>
            <p>{statistic.description}</p>
            <spam>{statistic.info}</spam>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
