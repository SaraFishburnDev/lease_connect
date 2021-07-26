
import NewHouse from '../components/house/NewHouse';
import LoginForm from '../components/login/LoginForm';
import ImageUpload from '../components/image/ImageUpload';
import NewUser from '../components/user/NewUser';
import NewDocument from '../components/documents/NewDocument';
import HouseCard from '../components/house/HouseCard';
import UserCard from '../components/user/UserCard';

export default function Test() {
  return (
    <div>
      <h1>Lease Connect</h1>
      <ImageUpload />
      <NewUser/>
      <NewDocument />
      <HouseCard />
      <UserCard />
    </div>
  )
}