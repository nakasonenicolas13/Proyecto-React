
import "../Stylesheets-Components/Logo.css"

const Logo = ({ logo }) => {
  return (
    <>
      <img src={logo} alt="Logo" className="imagen-logo"/>
    </>
  )
}

export default Logo