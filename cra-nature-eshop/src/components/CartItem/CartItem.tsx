import { Product } from '../../models/Products';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';

interface Props {
  product: any;
  removeFromCart(product: Product): any;
}

function CartItem({ product, removeFromCart }: Props): JSX.Element {
  return (
    <ListItem
      divider={true}
      alignItems="flex-start"
      data-testid={'product' + product.id}
      sx={{ flexDirection: 'column' }}
    >
      <ListItemText
        primary={product.name}
        secondary={product.price + '' + 'kr'}
      />
      <ListItemText>{product.inCart} in cart</ListItemText>
      <button
        data-testid={'productBtn' + product.id}
        onClick={() => removeFromCart(product)}
      >
        Remove from cart
      </button>
    </ListItem>
  );
}

export default CartItem;
