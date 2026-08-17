import "./TabsBtn.css";

function TabsBtn({ children, onClick, isActive }) {
  return (
    <button
      className={"tabs-btn" + (isActive ? " active" : "")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default TabsBtn;
