import { IoIosArrowDroprightCircle } from "react-icons/io";

import "./RegisterBtn.css";

function RegisterBtn({ onClick }) {
  return (
    <button className="register-btn" onClick={onClick}>
      Register
      <IoIosArrowDroprightCircle />
    </button>
  );
}
function DiscoverBtn() {
  return (
    <a href="#">
      <button className="register-btn">Discover</button>
    </a>
  );
}
export { RegisterBtn, DiscoverBtn };
