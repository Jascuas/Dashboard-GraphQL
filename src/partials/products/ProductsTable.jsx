
import Products from './ProductsTableItem';

function ProductsTable({ products, totalProducts, order, setOrder, orderBy, setOrderBy }) {
  const arrowDown = <svg className="w-4 h-4 fill-current text-slate-400 shrink-0 ml-2" viewBox="0 0 16 16" ><path d="M3.47 7.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L9 4.81v7.44a.75.75 0 01-1.5 0V4.81L4.53 7.78a.75.75 0 01-1.06 0z"></path></svg>
  const arrowUp = <svg className="w-4 h-4 fill-current text-slate-400 shrink-0 ml-2" viewBox="0 0 16 16" ><path d="M13.03 8.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.47 9.28a.75.75 0 011.06-1.06l2.97 2.97V3.75a.75.75 0 011.5 0v7.44l2.97-2.97a.75.75 0 011.06 0z"></path></svg>

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">Productos <span className="text-slate-400 font-medium">{totalProducts}</span></h2>
      </header>
      <div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  {orderBy==="SKU" ?
                    <a className="cursor-pointer" onClick={() => order==="asc" ? setOrder("desc") :  setOrder("asc")}>
                      <div className="flex font-bold text-left text-gray-900">
                      SKU
                      {order==="asc" ? arrowUp :  arrowDown}
                      </div>
                    </a>
                    :
                    <a className="cursor-pointer" onClick={() =>  setOrderBy("SKU")}>
                      <div className="font-semibold text-left text-slate-500">
                      SKU
                      </div>
                    </a>
                  }

                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                {orderBy==="title" ?
                    <a className="cursor-pointer" onClick={() => order==="asc" ? setOrder("desc") :  setOrder("asc")}>
                      <div className="flex font-bold text-left text-gray-900">
                      Articulo
                      {order==="asc" ? arrowUp :  arrowDown}
                      </div>
                    </a>
                    :
                    <a className="cursor-pointer" onClick={() =>  setOrderBy("title")}>
                      <div className="font-semibold text-left text-slate-500">
                      Articulo
                      </div>
                    </a>
                  }
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                {orderBy==="price" ?
                    <a className="cursor-pointer" onClick={() => order==="asc" ? setOrder("desc") :  setOrder("asc")}>
                      <div className="flex font-bold text-left text-gray-900">
                      Precio
                      {order==="asc" ? arrowUp :  arrowDown}
                      </div>
                    </a>
                    :
                    <a className="cursor-pointer" onClick={() =>  setOrderBy("price")}>
                      <div className="font-semibold text-left text-slate-500">
                      Precio
                      </div>
                    </a>
                  }
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                {orderBy==="tax" ?
                    <a className="cursor-pointer" onClick={() => order==="asc" ? setOrder("desc") :  setOrder("asc")}>
                      <div className="flex font-bold text-left text-gray-900">
                      Impuest
                      {order==="asc" ? arrowUp :  arrowDown}
                      </div>
                    </a>
                    :
                    <a className="cursor-pointer" onClick={() =>  setOrderBy("tax")}>
                      <div className="font-semibold text-left text-slate-500">
                      Impuesto
                      </div>
                    </a>
                  }
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                {orderBy==="stock" ?
                    <a className="cursor-pointer" onClick={() => order==="asc" ? setOrder("desc") :  setOrder("asc")}>
                      <div className="flex font-bold text-left text-gray-900">
                      Stock
                      {order==="asc" ? arrowUp :  arrowDown}
                      </div>
                    </a>
                    :
                    <a className="cursor-pointer" onClick={() =>  setOrderBy("stock")}>
                      <div className="font-semibold text-left text-slate-500">
                      Stock
                      </div>
                    </a>
                  }
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {products &&
                products?.map(product => {
                  return (
                    <Products
                      key={product.id}
                      id={product.id}
                      sku={product.sku}
                      product={product.title}
                      price={product.price}
                      tax={product.tax}
                      stock={product.stock}
                    />
                  )
                })
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default ProductsTable;
