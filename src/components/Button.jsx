/* eslint-disable react/prop-types */
function Button(props) {
  return (
    <button
      type={props.type ? props.type : "button"}
      className={`${props.className} rounded-md px-3.5 py-2.5 text-sm font-semibold`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
