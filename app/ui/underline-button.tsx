import {UnderlineButtonProp} from "@/app/lib/definitions";


export default function UnderlineButton(props: UnderlineButtonProp<string>) {

    function handleAction() {
        props.action(props.id)
    }

    return (
        <div className="flex">
            <button
                key={props.id}
                onClick={ handleAction }
                className='group transition-all duration-300 ease-in-out rounded-lg flex flex-row'>
              <span
                  className="bg-gradient-to-r from-indigo-500 to-indigo-500 bg-[length:0%_3px] bg-left-bottom bg-no-repeat py-2 transition-all duration-500 ease-out group-hover:bg-[length:100%_3px]">
                {props.name}
              </span>
            </button>
        </div>
    );
}
