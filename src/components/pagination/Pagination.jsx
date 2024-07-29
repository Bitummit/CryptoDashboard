export default function Pagination(props) {

  // for (let i = 1; i <= props.total; i++) {
  //   items.push(
  //     <li>
  //       <p className="border border-colorBorder rounded-l px-3 py-1 mr-1 bg-colorBgThird">
  //         i
  //       </p>
  //     </li>
  //   );
  // }
  let current = props.page,
        last = props.total,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        items = [],
        itemsWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
          items.push(
            <li>
        <p className="border border-colorBorder rounded-l px-3 py-1 mr-1 bg-colorBgThird">
          i
        </p>
      </li>
          );
        }
    }

    for (let i of items) {
        if (l) {
            if (i - l === 2) {
              itemsWithDots.push(
                  <li>
        <p className="border border-colorBorder rounded-l px-3 py-1 mr-1 bg-colorBgThird">
          l+1
        </p>
      </li>
                );
            } else if (i - l !== 1) {
              itemsWithDots.push('...');
            }
        }
        itemsWithDots.push(i);
        l = i;
    }

    console.log(itemsWithDots);
  return <div></div>;
}
