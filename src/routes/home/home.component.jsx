import Directory from '../../components/directory/directory.component';
import { categories } from '../../data/category-items-data';
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <div className=''>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
