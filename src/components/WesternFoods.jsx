import React from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./generalMenu.css";
function WesternFoods() {
 var items= [{img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=",
text:"Burger",
price: "8000 IQD"},
{img: "https://www.foodandwine.com/thmb/FruFDfmVzUgb6elux4DPifdmDb8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/super-crispy-fried-chicken-sandwiches-2-FT-RECIPE0820-33643e5fe9d44932bdd0bb0d104d9a4b.jpg",
text:"Crispy Chicken",
price: "8000 IQD"}
,
{img: "https://b.zmtcdn.com/data/pictures/chains/1/18412861/fe8c80fa162c790264a597b45e7e6580.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
  text:"Pizza",
price: "15000 IQD"}
,
{img: "https://t2.uc.ltmcdn.com/en/posts/2/2/4/how_to_make_cheese_sticks_from_scratch_1422_600.jpg",
text:"Cheese Sticks",
price: "6000 IQD"}
,
{img: "https://ocdn.eu/pulscms-transforms/1/53wk9kpTURBXy82YTJmNDkxZGY5N2RhYWFlNDIxOWY2MzE2MmI3ZjM0ZS5qcGeTlQMEMc0X6M0Nc5MJpjY2M2M1ZgaTBc0EsM0Cdt4AAaEwAQ/wloska-lazania-zdjecie-ilustracyjne.jpg",
text:"Lazania",
price: "18000 IQD"}];




    return(
        <>
        <h2 className="textStyle">Western Foods</h2>
        <ul className="list textStyle">
        {items.map((item) => (
          <li>
                <Card>
                  <Card.Img variant="top" height="200px" src={item.img} />
                  <Card.Body>
                  <Card.Text>
                    {item.text}
                  </Card.Text>
                  <hr/>
                <Card.Text>
                  {item.price}
                </Card.Text>
                  </Card.Body>
                </Card>
              <br/>
                </li>))}
        </ul>
        </>
    );
}

export default WesternFoods;
