
import { ShowcaseDetail } from "@/app/lib/definitions";
import Link from "next/link";


export default function ShowcaseDetails(detail: ShowcaseDetail) {
    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
        <div className="sm:col-span-2 flex flex-col gap-4 rounded-lg p-12 m-auto">
          <p className="font-bold text-2xl">
            Projekt: {detail.projectInfo}
          </p>
          <p className="font-bold text-xl">Powierzchnia realizacji: {detail.areaInfo}</p>
          <p className="font-bold text-xl">Czas realizacji: {detail.workTime}</p>
          <p className="font-semibold text-lg" >
            Opis: <br />
           {detail.description}
          </p>
          <Link className="bg-zinc-700 hover:bg-zinc-800 text-white rounded-lg w-36 text-center mt-2 sm:mt-8 px-4 py-2 font-semibold text-lg"  href={detail.href} >Czytaj dalej</Link>
        </div>
        <div className="sm:col-span-2 sm:col-start-3">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        
        <div className="sm:col-span-2 sm:row-span-2">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="living"
          />
        </div>
        <div className="sm:col-span-2">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="living"
          />
        </div>
        <div className="sm:col-span-2 row-span-2">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="living"
          />
        </div>
      </div>
    );
}