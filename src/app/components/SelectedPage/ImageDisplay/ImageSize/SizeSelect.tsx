"use client"

type SizeSelectProps = {
  size: string;
  key: number;
};

const SizeSelect = ({size,key}:SizeSelectProps) => {

  const selectSize = (isWhite: string) => {
    const elements = document.querySelectorAll('.is-black');
    elements.forEach(element => element.classList.remove('is-black'));
  
    const selectedElement = document.querySelector(isWhite);
    selectedElement?.classList.add('is-black');
  };

  return (
    <p 
      key={key}
      className={`is-white size-${size}`} 
      onClick={()=> selectSize(`.size-${size}`)}
    >{size}</p>
  )
}

export default SizeSelect