"use client"

type SizeSelectProps = {
  size: string;
};

const SizeSelect = ({size}:SizeSelectProps) => {

  const selectSize = (isWhite: string) => {
    const elements = document.querySelectorAll('.is-black');
    elements.forEach(element => element.classList.remove('is-black'));
  
    const selectedElement = document.querySelector(isWhite);
    selectedElement?.classList.add('is-black');
  };

  return (
    <p 
      key={size}
      className={`is-white size-${size}`} 
      onClick={()=> selectSize(`.size-${size}`)}
    >{size}</p>
  )
}

export default SizeSelect