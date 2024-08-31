import Navbar from "@/components/Navbar";
import Link from 'next/link'
import Footer from "@/components/Footer";
export default function Education(){
    return (
        <main>
            <Navbar />
            <form className="space-y-6" action='/register' method="POST">
                <h1>HighSchool Level</h1>
                <div className="parent">
                    <div>
                        <label>School Name</label>
                        <br />
                        <input type="text" name="SchoolName"/>
                        <br />
                    </div>
                    <div>
                        <label>Graduation Year</label>
                        <br />
                        <input type="date" name='GraduationYear'/>
                        <br />
                    </div>
                </div>
                <div className="parent">
                    <div>
                        <label>Combination</label>
                        <br />
                        <input type="text" name='Combination'/>
                        <br />
                    </div>
                    <div className="">
                        <Link href="" className="text-submain">
                            Other
                        </Link>
                        <input
                            type="text"
                            className="combination rounded-none"
                        />
                    </div>
                </div>
                <h1>Other Education Levels</h1>

                <div className="parent">
                    <div>
                        <label>Field of Study</label>
                        <br />
                        <input type="text" name='FieldofStudy'/>
                        <br />
                    </div>
                    <div>
                        <label>Degree Obtained</label>
                        <br />
                        <select name='Degree'>
                            <option value="Bachelors">Bachelors</option>
                            <option value="Masters">Masters</option>
                            <option value="PHD">PHD</option>
                        </select>
                        <br />
                    </div>
                </div>
                <div className="flex mx-[200px]">
                    <p>Have another degree in a different field ?</p>
                    <Link href="" className="text-submain underline">
                        Add another field
                    </Link>
                    <br />
                </div>
               <Footer/>
            </form>
        </main>
    );
}