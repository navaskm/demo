type Menu = {
  open? : boolean,
}
function Links({open}:Menu) {

  return(
    <div className="navbar-links">
      <ul className={`nav-link ${open? 'active':''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/components/SelectedPage">about</a></li>
        <li><a href="/components/SelectedPage">contact</a></li>
      </ul>
    </div> 
  )
}

export default Links;