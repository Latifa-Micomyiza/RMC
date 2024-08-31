import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function Footer(){

    return (
        < div className = "flex items-center justify-between ml-[200px]  py-4" >
            <Link href="/" className="text-submain underline">
                <FaLongArrowAltLeft className="fill-submain"/>
        Return
    </Link>
    <button
        type="submit"
        className="border border-main bg-main text-white px-10 py-1 rounded-md mr-[100px]"
    >
        <Link href="/proffessional">Continue</Link>
    </button>
    </div >
    )
}


