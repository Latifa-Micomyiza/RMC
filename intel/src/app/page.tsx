
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
      <main>
          <Navbar />
          <div className="">
              <form className="space-y-6" action="" method="POST">
                  <div className="parent">
                      <div>
                          <label>Firstname</label>
                          <br />
                          <input type="text" name="FirstName" />
                          <br />
                      </div>
                      <div>
                          <label>Lastname</label>
                          <br />
                          <input type="text" name="LasttName" />
                          <br />
                      </div>
                  </div>
                  <div className="parent">
                      <div>
                          <label>Gender</label>
                          <br />
                          <select name="Gender">
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                          </select>
                          <br />
                      </div>

                      <div>
                          <label>Date of Birth</label>
                          <br />
                          <input type="date" name="DOB" />
                          <br />
                      </div>
                  </div>
                  <div className="parent">
                      <div>
                          <label>Personal website</label>
                          <br />
                          <input
                              type="text"
                              placeholder="____LinkedIn,Twitter,Etc___"
                              name="PersonalWebsite"
                          />
                          <br />
                      </div>
                  </div>
                  <div className="parent">
                      <Link href="" className="text-submain underline">
                          Add another link
                      </Link>
                      <br />
                  </div>
                  <div className="parent">
                      <div>
                          <label>Email address</label>
                          <br />
                          <input type="email" name="Email" />
                          <br />
                      </div>
                      <div>
                          <label>Phone number </label>
                          <br />
                          <input type="number" name="PhoneNumber" />
                          <br />
                      </div>
                  </div>

                  <div className="parent">
                      <div>
                          <label>Country</label>
                          <br />
                          <input type="text" name="country" />
                          <br />
                      </div>
                      <div>
                          <label>Residential address</label>
                          <br />
                          <input type="text" name="Residence" />
                          <br />
                      </div>
                  </div>
                  <div className="flex justify-around py-4">
                      <Link href="/" className="text-submain underline">
                          Return
                      </Link>
                      <button
                          type="submit"
                          className="border border-main bg-main text-white px-10 py-1 rounded-md"
                      >
                          <Link href="/education">Continue</Link>
                      </button>
                  </div>
              </form>
          </div>
      </main>
  );
}
