import React from 'react';
import { FaHeart } from 'react-icons/fa';

const style = {
  textAlign: 'center'
}
function Footer() {
  return(
    <footer>
      <section>
        <a>
          DonRapi | Delivery con el  
          <span> <FaHeart /> </span>
          de siempre.
        </a>
      </section>
    </footer>
  )
}

export default Footer;