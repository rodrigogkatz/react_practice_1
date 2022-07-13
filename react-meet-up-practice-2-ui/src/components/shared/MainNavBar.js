import { Link } from 'react-router-dom';
// the Link is like <a href=''>
// react makes it render an anchor tag and internaly attaches an onClick listener
// and prevents browser defaults of sending the request, and parses the url we want to go to
// changes it in the browser url bar, but then loads the appropriate component into the screen

function MainNavBar(props){
  return <header>
    <div className='header-logo'></div>
    <nav>
      <ul>
        <li><Link to='/'>All Meetups</Link></li>
        <li><Link to='/new-meetup'>New Meetups</Link></li>
        <li><Link to='/favorites'>Favorites</Link></li>
      </ul>
    </nav>
    <div></div>
  </header>;
}

export default MainNavBar;
