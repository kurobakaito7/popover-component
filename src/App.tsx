import Popover from "./Popover";

export default function App() {
  const popoverContent = <div>
    kkkkk
    <br />
    <button onClick={() => {alert(1)}}>click 1</button>
  </div>;

  return <Popover
    content={popoverContent}
    placement="bottom"
    trigger="click"
    style={{margin: '200px'}}
  >
    <button>popover</button>
  </Popover>
}