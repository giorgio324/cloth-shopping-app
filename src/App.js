import Directory from './components/directory/directory.component';
import { categories } from './data/category-items-data';
function App() {
  return <Directory categories={categories} />;
}

export default App;
