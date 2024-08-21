import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function SortingTableHeader(props) {
    return (
        <th
          scope="col"
          className="px-6 py-3 text-center table-cell cursor-pointer border-r border-colorBorder hover:bg-gray-500"
          onClick={() => {props.handleHeaderClick(props.field_key)}}
        >
          {props.field_name}
          {props.order.key === props.field_key &&
            (props.order.direction === "ASC" ? (
              <ArrowDownwardIcon className="scale-75" />
            ) : (
              <ArrowUpwardIcon className="scale-75" />
            ))}
        </th>
    )
}