export default function Card(props) {
  return (
    <div className="transition hover:border-red-400 border-2 shadow-sm hover:scale-110">
      <div className="relative w-64 h-64 overflow-hidden">
        <img
          src={require(`../../../assets/${props.image}`)}
          alt={props.metadesc}
          className="object-cover w-full h-full"
        />
        <div className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4">
          {props.name}
        </div>
      </div>
    </div>
  );
}
