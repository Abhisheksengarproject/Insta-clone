import { useState } from 'react';
import Auth from '../components/Auth/Auth';
import Feed from '../components/Feed/Feed';

const HomePage = () => {

  const[isAuthenticated, setIsAuthenticated] = useState(true);

  return isAuthenticated ? <Feed /> : <Auth />
}

export default HomePage

