export default function NextCheckButtons(props) {
  return (
    <div>
      <button onClick={() => props.displayFunc("check")}>check</button>
      <button onClick={() => props.displayFunc("next")}>Next</button>
    </div>
  );
}
