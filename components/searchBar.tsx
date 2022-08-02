export default function SearchBar(props: any) {
  const handleChange = (e: any) => {
    const searchValue = e.target.value;
    const filteredImages = props.imageValues.filter((image: any) => {
      return image.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    props.handleSearch(filteredImages);
  };

  return (
    <div className="flex items-center w-[80%] lg:w-full md:w-full">
      <input
        className="bg-zinc-700 w-full lg:w-full md:w-full placeholder:text-zinc-300 focus:outline-none border-none p-2 text-zinc-200 rounded shadow-2xl"
        onChange={handleChange}
        placeholder="Search ..."
      />
    </div>
  );
}
