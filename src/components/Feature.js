import "./Feature.scss";

export default function Feature(props) {
  return (
    <article className="feature">
      <h2 className="feature-heading">{props.heading}</h2>
      <p className="feature-description">{props.description}</p>
      <img src={props.icon} alt={props.alt} />
    </article>
  );
}
