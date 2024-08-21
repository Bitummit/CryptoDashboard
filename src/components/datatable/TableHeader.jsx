export default function TableHeader(props) {
    return (
        <th
            scope="col"
            className={`px-6 py-3 text-center table-cell cursor-pointer border-r border-colorBorder ${props.field_name && "hover:bg-gray-500"}`}
        >
            
            {props.field_name}
        </th>
    )
}