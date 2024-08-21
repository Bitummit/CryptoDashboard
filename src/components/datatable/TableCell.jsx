export default function TableCell(props) {
    return (
        <td className={`"px-6 py-4 text-center text-colorTextPrimary table-cell ${props.bold && "font-bold"}`}>
            {props.children}
        </td>
    )
}