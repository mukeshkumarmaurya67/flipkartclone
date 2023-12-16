import React from "react";

function Card(props) {
  return (
    <div class="card" style="width: 18rem;">
      <img src={props.product.image} class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{props.product.name}</h5>
        <p class="card-text">{props.product.description}</p>
        <a href="#" class="btn btn-primary">
          {props.product.link}
        </a>
      </div>
    </div>
  );
}

export default Card;
