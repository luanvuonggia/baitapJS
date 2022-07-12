// import React, { Component } from "react";

// export default class RandomNumberComponent extends Component {
//   constructor(props) {
//     super(props);
//     //Khởi tạo state
//     this.state = {
//       number: 0,
//     };
//     this.randomNumber = this.randomNumber.bind(this);
//   }
//   randomNumber = () => {
//     const number = Math.round(Math.random() * 100);
//     //Cập  nhật state mới
//     this.setState({
//       number,
//     });
//   };
//   render() {
//     return (
//       <div style={{ padding: "10%" }}>
//         <b>{this.state.number}</b> <hr />
//         <button onClick={this.randomNumber}>Random</button>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";

export default function RandomNumberComponent(props) {
  const [number, setNumber] = useState(0);

  return (
    <div style={{ padding: "10%" }}>
      <b>{number}</b> <hr />
      <button
        onClick={() => {
          setNumber(Math.round(Math.random() * 100));
        }}
      >
        Random
      </button>
    </div>
  );
}
