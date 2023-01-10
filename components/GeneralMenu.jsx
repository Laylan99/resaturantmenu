import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"

function Gmenu() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug="
          alt="western food"
        />
        <Carousel.Caption>
          <h3>Western Foods</h3>
          <p>See Different Types of Western Foods</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Oriental Dishes"
        />

        <Carousel.Caption>
          <h3>Oriental Dishes</h3>
          <p>See Different Types of Oriental Dishes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Appetizer"
        />

        <Carousel.Caption>
          <h3>Appetizer</h3>
          <p>
            See Different Types of Appetizer and Salats</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gmenu;
