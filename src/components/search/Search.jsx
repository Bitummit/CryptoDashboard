import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div className="mx-5 md:ml-5 md:w-1/4 ">
      <form className="">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon className="h-3 w-3" />
          </div>
          <input
            class="h-14 block w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-4 focus:border-blue-100 focus:outline-none"
            placeholder="Search users"
            required
          />
          <button class="text-white absolute end-2.5 bottom-2.5 bg-blue-100 hover:bg-blue-50 font-medium rounded-lg text-sm px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
