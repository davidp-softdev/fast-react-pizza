import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className='my-10 px-4 text-center sm:my-16'>
      <h1 className='mb-8 text-3xl text-xl font-semibold'>
        The best pizza.
        <br />
        <span className='text-yellow-500'>
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === '' ? (
        <CreateUser />
      ) : (
        <Button to='/menu' type='primary'>
          Continue ordering, {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
