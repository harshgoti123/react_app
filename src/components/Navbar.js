
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
 
  console.log()
  return (
   
    <div>
     
      <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" href="/">{props.title}</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active"  aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">about</Link>
        </li>
       </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
     
    </div>
    <div class={`form-check form-switch text-${props.color}`}>
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">enable {props.color} mode</label>
</div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={title:PropTypes.string,
    abouttext:PropTypes.string.isRequired};

Navbar.defaultProps={
    title:"harsh"
}
