export default function InputSearchBox(props) {
    return (
        <input
            type="text"
            placeholder="Search repos..."
            value={props.searchTerm}
            onChange={(e) => props.setSearchTerm(e.target.value)}
        />
    );
}