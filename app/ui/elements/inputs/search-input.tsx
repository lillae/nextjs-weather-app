type SearchInput = {
	value?: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	placeholder: string;
	defaultValue: string;
};

const SearchInput = ({
	value,
	onChange,
	placeholder,
	defaultValue,
}: SearchInput) => {
	return (
		<input
			type='search'
			name='search'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			defaultValue={defaultValue}
			className='w-full pl-2 py-2 bg-transparent border-b border-blue-6 text-blue-2 focus:outline-none placeholder:text-blue-2/40 placeholder:font-normal'
		/>
	);
};

export default SearchInput;
