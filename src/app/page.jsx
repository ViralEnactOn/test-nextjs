import Link from "next/link";
import UserForm from "./component/userform";

export default function Home() {
  return (
    <main className="min-w-max flex justify-center font-poppins ">
      <div className="container">
        <div className="flex justify-center min-h-screen">
          <div className="flex self-center w-96 h-96 bg-gray-200 justify-center rounded-lg">
            <div className="self-center ">
              <div className="flex justify-center font-bold text-xl">
                Enter User Detail
              </div>
              <UserForm />
              <div className="mt-5 flex justify-center ">
                <Link
                  href="/allusersdata"
                  className="rounded-lg bg-cyan-300 p-2 "
                >
                  Show all data
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
