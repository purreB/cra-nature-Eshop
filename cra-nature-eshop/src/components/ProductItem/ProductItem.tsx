import { Product } from '../../models/Products';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';

interface Props {
  product: Product;
  addToCart(product: Product): any;
}

function ProductItem({ product, addToCart }: Props): JSX.Element {
  return (
    <ListItem
      divider={true}
      alignItems="flex-start"
      data-testid={'productItem' + product.id}
      sx={{ flexDirection: 'column' }}
    >
      <ListItemText
        primary={product.name}
        secondary={product.price + '' + 'kr'}
      />
      <ListItemText>{product.inStore} in store</ListItemText>
      <button
        data-testid={'product' + product.id}
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </ListItem>
  );
}

export default ProductItem;
