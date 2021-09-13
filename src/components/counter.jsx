import React from "react";

const Counter = ({ value, id, name, onIncrement, onDecrement, onDelete }) => {
  const formCount = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getBadgeClasses = () => {
    return value === 0 ? "badge m-2 bg-danger" : "badge m-2 bg-secondary";
  };

  return (
    <div>
      <h4>{name}</h4>
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button className="btn bg-primary m-2" onClick={() => onIncrement(id)}>
        Increment
      </button>
      <button
        className="btn bg-primary m-2"
        onClick={() => {
          onDecrement(id);
        }}
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        DELETE
      </button>
    </div>
  );
};
export default Counter;
// const [count, setCount] = useState(1);
// const tags = [];
// const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");
// const formCount = () => {
//   return count === 0 ? <h1>"Ноль"</h1> : count;
// };

// const getBageClasses = () => {
//   let classes = "badge m-2 bg-";
//   classes += count === 0 ? "danger" : "primary";
//   return classes;
// };

// const renderTags = () => {
//   if (tags.length === 0) return "Тегов не найдено";
//   return tags.map((tag) => <li key={tag}>{tag}</li>);
// };

// const handleIncrement = (productId) => {
//   console.log(productId);
//   setCount(count + 1);
// };

// const handleDecrement = (productId) => {
//   console.log(productId);
//   if (count >= 1) {
//     setCount(count - 1);
//   }
// };

// return (
//   <React.Fragment>
//     {tags.length === 0 && "Теги не найдены"}
//     {renderTags()}
//     <img src={imageUrl} alt="" />
//     <span
//       style={{ fontSize: "30px", fontWeight: "bold" }}
//       className={getBageClasses()}
//     >
//       {formCount()}
//     </span>
//     <button
//       onClick={() => handleIncrement({ id: 1 })}
//       className="btn btn-secondary btn-sm"
//     >
//       Increment
//     </button>
//     <button
//       onClick={() => handleDecrement({ id: 1 })}
//       className="btn btn-secondary btn-sm"
//     >
//       Decrement
//     </button>
//   </React.Fragment>
