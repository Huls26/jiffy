import ContentComponents from '@features/ViewContent';

export default function ViewPage() {
  const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';
  const userDetails = {
    userImg: 'https://images.pexels.com/photos/3768263/pexels-photo-3768263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    username: 'John Lee',
    textDetails: 'something awesome text',
  };

  return (
    <main>
      <ContentComponents content={imgUrl} details={userDetails} />
    </main>
  );
}