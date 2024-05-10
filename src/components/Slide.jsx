function Slide({ src, active }) {
  return (
    <div
      className={`absolute w-full h-full transition-opacity duration-500 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img src={src} alt={`${src}`} className="object-cover w-full h-full" />
    </div>
  );
}

export default Slide;