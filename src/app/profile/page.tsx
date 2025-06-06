import { getOrderCabinet, getUserCabinet } from './actions'
import UserDashboard from './components/UserDashboard'

export default async function Cabinet() {
  const user = await getUserCabinet();

  if (!user) {
    return <div className='pt-64'>Ошибка: пользователь не найден. Пожалуйста, войдите в аккаунт.</div>;
  }

  const orders = await getOrderCabinet(user.id);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Личный кабинет</h1>
      <UserDashboard user={user} orders={orders} />
    </div>
  )
}