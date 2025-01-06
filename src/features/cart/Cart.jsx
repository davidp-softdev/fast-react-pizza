import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from '../cart/CartItem';
import EmptyCart from '../cart/EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

function Cart() {
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className='px-3 py-3'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {userName}</h2>

      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className='mt-6 space-x-2'>
        <Button type='primary' to='/order/new'>
          Order pizzas
        </Button>

        {/* <Link to='/order/new'>Order pizzas</Link> */}
        <Button onClick={() => dispatch(clearCart())} type='secondary'>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
