export default () => (
  <div className="w-auto p-4 bg-white text-center rounded-3xl shadow-xl">
    <img
      className="mx-auto h-42 w-42 rounded-3xl"
      src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      alt="Profile image"
    />

    <hr className="mt-4 border-1" />
    <div className="pt-4">
      <p className="font-semibold text-gray-400 text-center">
        Jhon Doe
        <br />
        Specialist Specialist
      </p>

      <a href="#" className="">
        <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
          <span className="font-medium">Choose Plan</span>
        </p>
      </a>
    </div>
  </div>
);
