import { useEffect, useState } from "react";

export default function Pagination(props) {
  function item_component(value) {
    let dots = "...";
    return (
      <div onClick={() => props.handlePageChange(value)}>
        <p
          className={`flex items-center justify-center px-3 py-1 text-colorTextGraySecond bg-colorBgSecondary border border-colorBorder rounded-lg dark:bg-colorBgThird cursor-pointer ${
            value === props.page ? "border-blue-100 border-2" : "hover:bg-gray-100 hover:text-colorTextPrimary"
          }`}
        >
          {value}
        </p>
      </div>
    );
  }

  function paginate(current, max) {
    if (!current || !max) return null;

    let items = [item_component(1)];

    if (current === 1 && max === 1) return items;
    if (current > 4) items.push(item_component("…"));

    let r = 2,
      r1 = current - r,
      r2 = current + r;

    for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++)
      items.push(item_component(i));

    if (r2 + 1 < max) items.push(item_component("…"));
    if (r2 < max) items.push(item_component(max));

    return items;
  }

  const [items, setItems] = useState([]);
  const current = props.page;

  paginate(props.page, props.total);
  useEffect(() => {
    console.log("paginate use effect");
    setItems(paginate(props.page, props.total));
  }, [current, props.total]);

  // current, items = paginate(props.page, props.total);

  // let current = props.page,
  //   last = props.total,
  //   delta = 2,
  //   left = current - delta,
  //   right = current + delta + 1,
  //   items = [],
  //   itemsWithDots = [],
  //   l;

  // for (let i = 1; i <= last; i++) {
  //   if (i == 1 || i == last || (i >= left && i < right)) {
  //     items.push(
  //       <li>
  //         <p className="border border-colorBorder rounded-l px-3 py-1 mr-1 bg-colorBgThird">
  //           i
  //         </p>
  //       </li>
  //     );
  //   }
  // }

  // for (let i of items) {
  //   if (l) {
  //     if (i - l === 2) {
  //       itemsWithDots.push(
  //         <li>
  //           <p className="border border-colorBorder rounded-l px-3 py-1 mr-1 bg-colorBgThird">
  //             l+1
  //           </p>
  //         </li>
  //       );
  //     } else if (i - l !== 1) {
  //       itemsWithDots.push("...");
  //     }
  //   }
  //   itemsWithDots.push(i);
  //   l = i;
  // }

  // console.log(itemsWithDots);
  return (
    <div class="flex justify-end items-center text-sm gap-1">
      {items.map((item) => (
        <div key={item.index}>{item} </div>
      ))}
    </div>
  );
}
