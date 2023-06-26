import Header from './components/Header';

export default function UserProfile() {
  const bannerPhoto = 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/imgTag.png';
  const userDetails = {
    userImg: 'https://images.pexels.com/photos/3768263/pexels-photo-3768263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    username: 'John Lee',
    textDetails: 'something awesome text',
  };

  return (
    <>
      <Header banner={bannerPhoto} userDetails={userDetails} />
      <section>
        content
      </section>
    </>
  );
}
