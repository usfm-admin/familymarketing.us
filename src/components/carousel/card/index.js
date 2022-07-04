export default function Card(props) {
  return (
    <div className="border shadow-sm">
      <div className="relative w-64 h-64 overflow-hidden">
        <img
          src={props.image}
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
