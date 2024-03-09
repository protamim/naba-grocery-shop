import useProducts from "@/app/hooks/useProducts";

const { CiSearch } = require("react-icons/ci");

const DropDownSearchBar = () => {
    const { data: products, isLoading, error } = useProducts();
  
    if (isLoading) return <div>Loading...</div>;
  
    if (error) return <div>An error has occurred: {error.message}</div>;
  
   const getCategory = products?.filter((obj, index, arr) => {
      return arr.findIndex((item) => item.category === obj.category) === index;
    });
  
    return (
      <>
        <form className="pt-3">
          <div className="grid grid-cols-3 gap-x-2 divide-x-2 items-center bg-stone-100 rounded-md">
            <select
              name="category"
              className="py-2 col-span-1 bg-stone-100  outline-none border-none px-2 rounded-md text-stone-400 text-sm"
            >
              <option value="">All Categories</option>
              {getCategory.map((cat) => (
                <option
                  className="text-stone-400 text-sm hover:bg-slate-400"
                  key={cat.id}
                  value={cat.category}
                >
                  {cat.category}
                </option>
              ))}
            </select>
            <div className="col-span-2 relative">
              <input
                className="w-full bg-stone-100 py-2 pl-2 rounded-md outline-none text-sm"
                type="text"
                placeholder="Type your products..."
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-xl transition-all duration-300 hover:text-green-500">
                {" "}
                <CiSearch />{" "}
              </button>
            </div>
          </div>
        </form>
      </>
    );
  };

  export default DropDownSearchBar;