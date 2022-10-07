import Feature from "./Feature";
import "./Features.scss";

export default function Features(props) {
  return (
    <section className="features">
      {props.cards.map((card) => {
        return (
          <Feature
            heading={card.heading}
            description={card.description}
            icon={card.icon}
            alt={card.alt}
          />
        );
      })}
    </section>
  );
}
