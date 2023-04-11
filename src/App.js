import Entry from "./Entry";
import emojiPedia from "./emojiPedia";
import "./styles.css";

function crateEntry(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojiPedia.map(crateEntry)}</dl>
    </div>
  );
}
