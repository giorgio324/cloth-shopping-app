import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  DirectoryItemConteiner,
} from './directory-item.styles';

function DirectoryItem({ category: { imageUrl, title, route } }) {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemConteiner onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemConteiner>
  );
}

export default DirectoryItem;
