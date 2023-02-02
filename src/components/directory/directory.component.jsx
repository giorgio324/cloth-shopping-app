import { DirectoryContainer } from './directory.styles';
import DirectoryItem from '../directory-item/directory-item.component';
import { categories } from '../../data/category-items-data';
const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
