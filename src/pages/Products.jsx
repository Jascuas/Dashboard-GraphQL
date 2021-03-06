import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import SearchForm from '../partials/actions/SearchForm';
import FilterButton from '../components/DropdownFilter';
import ProductsTable from '../partials/products/ProductsTable';
import PaginationNumeric from '../components/PaginationNumeric';

const query = `
  query FetchProducts(
    $tax_filter: [String!],
    $title_filter: String,
    $order_by: String,
    $order: String,
    $page: Int!,
    $per_page: Int!){
    fetchProducts {
    results(taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage:
    $per_page) {
    id
    sku
    title
    price
    tax
    stock
    }
    pagination(taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage:
    $per_page) {
    totalResults
    limitValue
    totalPages
    currentPage
    nextPage
    prevPage
    firstPage
    lastPage
    outOfRange
    }
    }
    }
`;

function Products() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState(Object);
  const [taxFilters, setTaxFilters] = useState([]);
  const [titleFilter, setTitleFilter] = useState();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState();
  const [page, setPage] = useState(1);
  const apiEndpoint = "http://vps-123eb2fc.vps.ovh.net/graphql";

  const getData = () => {
    fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: {
          "title_filter": titleFilter,
          "tax_filter": taxFilters.length === 0  ? null : taxFilters,
          "order_by": orderBy,
          "order": order,
          "page": page,
          "per_page": 7
           }
      })
    })
      .then(res => res.json())
      .then((data) => {
        setData(data.data.fetchProducts)
      } )
      .catch(console.error);
  };

  useEffect(() => {
    setPage(1)
    getData()
  }, [taxFilters, titleFilter, order, orderBy])

  useEffect(() => {
    getData()
  }, [page])
  return (
    <div className="flex h-screen overflow-hidden theme-blue">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Cat??logo</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm placeholder="Search by Product ID???" setTitleFilter={setTitleFilter}/>
                {/* Filter button */}
                <FilterButton align="right" seTaxFilters={setTaxFilters} />
              </div>

            </div>
            {/* Table */}
            <ProductsTable products={data.results} totalProducts={data.pagination?.totalResults} order={order} setOrder={setOrder} orderBy={orderBy} setOrderBy={setOrderBy}/>

            {/* Pagination */}
            <div className="mt-8">
              <PaginationNumeric pagination={data.pagination} setPage={setPage}/>
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Products;