function SearchBox(params) {
  const { listen } = params;
  return (

    <div className="tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search"
        type="search"
        onChange={listen}

      />
    </div>
  );
}

export default SearchBox;
