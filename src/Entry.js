export default function Entry(prop) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {prop.emoji}
        </span>
        <span>{prop.name}</span>
      </dt>
      <dd>{prop.meaning}</dd>
    </div>
  );
}
