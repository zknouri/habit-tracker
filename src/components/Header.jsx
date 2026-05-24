import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="">
      <div className="flex justify-center items-center">
        <img className="size-24" src={logo} alt="smart habit tracker logo" />
        <h1 className="text-4xl font-bold">Simple Habit Tracker</h1>
      </div>
      <button className="hidden cursor-pointer bg-gray-600 rounded-3xl p-2 text-gray-50">
        Dark mode toggle
      </button>
    </header>
  );
}
