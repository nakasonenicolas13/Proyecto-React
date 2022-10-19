import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -6,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Carrito({ contador }) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={ contador } color="primary">
        <ShoppingCartIcon fontSize="large" color="primary"/>
      </StyledBadge>
    </IconButton>
  );
}
