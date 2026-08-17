import "./SectionText.css";

function Title({ children }) {
  return <h1 className="unique-h1">{children}</h1>;
}
function Text({ children }) {
  return <p className="unique-p">{children}</p>;
}
function Text2({ children }) {
  return <p className="unique-p2">{children}</p>;
}

export { Title, Text, Text2 };
