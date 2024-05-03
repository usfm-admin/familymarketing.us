export default function Card(props) {
  return (
    <div className="transition border-2 text-white shadow-sm hover:scale-110">
      <div className="relative w-64 h-48 overflow-hidden">
          <img
            className="p-2 w-full object-cover h-full"
            width="48"
            height="48"
            src={require(`../../../assets/${props.image}`)}
            alt="logo small"
          />
      </div>
      <div className="shadow-inner hover:bg-blue-500 w-full bg-blue-800/80 py-2 bottom-0 inset-x-0  text-center">
          {props.name}
        </div>
    </div>
  );
}
