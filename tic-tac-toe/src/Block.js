const Block = ({mark,position,changeMark}) => {
    
    return (
        <div className={`block mark${mark}`} onClick={(e)=>changeMark(position)} >
       
        </div>
      );
}
 
export default Block ;