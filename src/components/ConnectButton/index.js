import "./style.scss"

const ConnectButton = ({ children, ...restProps }) => (
  <button className="connectbutton" {...restProps}>
    {children}
  </button>
)

export default ConnectButton
