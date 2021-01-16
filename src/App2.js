import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "food1",
    image: "image1",
    rating: 3,
  },
  {
    id: 2,
    name: "food2",
    image: "image2",
    rating: 4.9,
  },
  {
    id: 3,
    name: "food3",
    image: "image3",
    rating: 5.2,
  },
  {
    id: 4,
    name: "food4",
    image: "image4",
    rating: 3,
  },
  {
    id: 5,
    name: "food5",
    image: "image5",
    rating: 3,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <h2>this is {picture}</h2>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

//function App() {
//  return (
//    <div>
//      {foodILike.map((dish) => (
//        <Food
//          key={dish.id}
//          name={dish.name}
//          picture={dish.image}
//          rating={dish.rating}
//        />
//      ))}
//    </div>
//  );
//}

class App extends React.Component {
  // App은 무조건 Ract.Component이
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count - 1}));
  };
  // react는 functino은 rerender하지 않는다 그렇기 때문에 state를 직접 변경하면 안된다.
  // 즉, 매번 state의 상를 변경할 때 react가 render function을 호출해서 바꿔주길 원한다는 말이다.
  // setState를 써라
  // setState는 state를 refresh하고 render function을 호출한다.

  // add = () => {
  //   this.setState(current => ({count: current.count + 1}));
  // }
  // 이렇게하면 react에 외부의 상태에 의존하지 않는 가장 좋은 방법이다.
  // 여기서 상태라는 것은 this.state이다.
  // 여기서 current는 this.state 이다
  componentDidMount() {
    console.log("component rendered")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("I just updated")
  }

  render() {
    console.log("I'm renderging")
    return (
        <div>
          <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
    )
  }
}

export default App;
