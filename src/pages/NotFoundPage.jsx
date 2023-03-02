import notPage from '../images/notPage.jpg';
import { Block, Img} from '../pages/NFP.styled.js'

const NotFoundPage = () => {
  return (
    <>
      <Block >
        This page doesn't exist. Click on "Home"
      </Block>
      <Img
        src={notPage}
        alt="Not Page"
      />
    </>
  );
};

export default NotFoundPage;
