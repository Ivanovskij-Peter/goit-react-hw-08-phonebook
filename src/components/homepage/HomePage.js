import React from 'react';

const styles = {
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
};
export const homePage = () => {
  return (
    <img
      style={styles.image}
      src={
        'https://st2.depositphotos.com/1001855/7197/i/950/depositphotos_71978857-stock-photo-vintage-rotary-phone.jpg'
      }
      alt="main"
    />
  );
};
