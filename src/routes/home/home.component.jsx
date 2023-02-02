import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <div className=''>
      <Outlet />
      <Directory />
    </div>
  );
}

export default Home;
