import notPage from '../images/notPage.jpg';

const NotFoundPage = () => {
  return (
    <>
      <div style={{ padding: '40px', fontSize: '24px' }}>
        This page doesn't exist. Click on "Home"
      </div>
      <img
        style={{ width: '400px', height: 'auto' }}
        src={notPage}
        alt="Not Page"
      />
    </>
  );
};

export default NotFoundPage;
