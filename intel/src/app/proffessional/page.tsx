import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Proffessional() {
    return (
        <main>
            <Navbar />
            <form className="space-y-6" action="" method="POST">
                <h1>Current Carrier</h1>
                <div className="parent">
                    <div>
                        <label>Organization</label>
                        <br />
                        <input type="text" name="Organization" />
                        <br />
                    </div>
                    <div>
                        <label>Location</label>
                        <br />
                        <input
                            type="text"
                            placeholder="e.g:KG 297 ST"
                            className="px-4"
                            name="Location"
                        />
                        <br />
                    </div>
                </div>
                <div className="parent">
                    <div>
                        <label>Position</label>
                        <br />
                        <input type="text" name="Position" />
                        <br />
                    </div>
                </div>
                <h1>Additional Information</h1>
                <textarea
                    className="parent bg-transparent border border-main rounded-md w-[400px] h-[120px] pl-2 py-3 "
                    placeholder="Information like years of experience you may have"
                    name="MoreInformation"
                />

                <label className="text-sm flex gap-3 ml-[200px]">
                    <input
                        type="checkbox"
                        className="w-3 h-3 mt-[4px]"
                        required
                    />
                    I hereby confirm that all the information provided is true
                    and accurate to the best of my knowledge, and I agree to the
                    terms and conditions of this platform.
                </label>
                <div className="flex justify-around py-4">
                    <Link href="/education" className="text-submain underline">
                        Return
                    </Link>
                    <button
                        type="submit"
                        className="border border-main bg-main text-white px-10 py-1 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </main>
    );
}
