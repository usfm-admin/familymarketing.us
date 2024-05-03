export default function ServiceCard(props) {
  return (
    <a target="_blank" rel="noreferrer" href={props.link}>
      <div class="m-8 rounded transform hover:scale-110 duration-300 shadow-md shadow-red-200 bg-white ease-in">
        <div class="">
          <img alt={props.metadesc} class="m-auto h-32" src={props.image}/>
          <div className="p-2 shadow-inner shadow-blue-200	">
          <h2 class="text-xl font-bold ">{props.name}</h2>
          <p class="text-gray-600">{props.desc}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
