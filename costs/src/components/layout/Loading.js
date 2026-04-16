import {BiLoaderAlt} from 'react-icons/bi';
function Loading(){
    return(
        <div className="flex flex-col items-center justify-center">
            <BiLoaderAlt className="text-5xl animate-spin" />
        </div>
    )
}
export default Loading;