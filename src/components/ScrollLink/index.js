import { Link } from "react-scroll"
import "./style.scss"

const Scrollink = ({ to, children, ...restProps }) => (
  <Link
    className="scrollink"
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
    {...restProps}
  >
    {children}
  </Link>
)

export default Scrollink
