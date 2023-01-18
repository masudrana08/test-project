import "./mybutton.css"
interface MyButtonProps {
    btnName: string;
    func?: (msg:string) => void;
    funcParam?: string
  }
export default function MyButton({btnName, func, funcParam}:MyButtonProps) {
    const handleClick = () => {
        if (func && funcParam) {
          func(funcParam)
        }
      }
  return (
    <button className='mybtn' onClick={handleClick}>{btnName}</button>
  )
}
