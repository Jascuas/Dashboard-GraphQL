import React from 'react';

function ProductsTableItem(props) {

  const stockColor = (status) => {
    switch (status) {
      case 0:
        return 'bg-rose-100 text-rose-600';
      default:
        return 'bg-emerald-100 text-emerald-600';
    }
  };

  const taxColor = (status) => {
    switch (status) {
      case 'es_general_21':
        return 'bg-venped-base text-venped-accent';
      case 'fr_general_20':
        return 'bg-sky-100 text-sky-500';
      case 'es_reduced_10':
        return 'bg-teal-100 text-teal-500';
      case 'fr_reduced_5.5':
        return 'bg-green-100 text-green-500';
      case 'es_super-reduced_4':
        return 'bg-yellow-100 text-yellow-500';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };

  const show =  <svg className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-2" viewBox="0 0 16 16" ><path d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
  const edit = <svg className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-2" viewBox="0 0 16 16" ><path d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
  const arrow = <svg className="w-4 h-4 fill-current text-slate-400 shrink-0 mr-2" viewBox="0 0 16 16" ><path d="M13.03 8.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.47 9.28a.75.75 0 011.06-1.06l2.97 2.97V3.75a.75.75 0 011.5 0v7.44l2.97-2.97a.75.75 0 011.06 0z"></path></svg>

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-sky-500">{props.sku}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-500">{props.product}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-semibold text-black">{props.price} €</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={`inline-flex font-medium rounded-full text-center px-2.5 py-0.5 ${taxColor(props.tax)}`}>{props.tax}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className={`inline-flex font-medium rounded-full text-center px-2.5 py-0.5 ${stockColor(props.stock)}`}>{props.stock === 0 ? "vacio" : props.stock}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          {show}
          {edit}
          {arrow}
        </div>
      </td>
    </tr>
  );
}

export default ProductsTableItem;
