const Info = () => {
  return (
    <Section className="flex container banner">
      <div className="info-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-ribbon"></i>
        </div>

        <div>
          <strong>IT</strong>
          <p>Graduate</p>
        </div>
      </div>

      <div className="info-divider"></div>

      <div className="info-content flex"></div>
      <div className="icon-container flex">
        <i className="fa-solid fa-ribbon"></i>
      </div>

      <div>
        <strong>5 years</strong>
        <p>Completed</p>
      </div>

      <div className="info-divider"></div>

      <div className="icon-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-ribbon"></i>
        </div>

        <div>
          <strong>1 Year</strong>
          <p>Experience</p>
        </div>
      </div>
    </Section>
  );
};
export default Info;
