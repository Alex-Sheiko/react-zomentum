import './styles.scss';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container container">
        <h1 className="hero__title">
          Find the right partners to fuel your business growth
        </h1>
        <p className="hero__subtitle">
          Join a vibrant community of MSPs to forge long-lasting relationships
          with partners that help you create excellent customer experiences
        </p>
        <button className="hero__btn">Register today</button>
      </div>
    </div>
  );
};
