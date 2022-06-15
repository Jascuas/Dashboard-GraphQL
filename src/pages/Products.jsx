import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import SearchForm from '../partials/actions/SearchForm';
import FilterButton from '../components/DropdownFilter';
import ProductsTable from '../partials/products/ProductsTable';
import PaginationNumeric from '../components/PaginationNumeric';

function Products() {
  const [data, setData] = useState(Object);
  const apiEndpoint = "http://vps-123eb2fc.vps.ovh.net/graphql";
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const getData = () => {
    fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { 
          // "tax_filter": ["es_general_21", "es_reduced_10"],
          // "title_filter": "",
          // "order_by": "price",
          // "order": "desc",
          "page": 1,
          "per_page": 7
           }
      })
    })
      .then(res => res.json())
      .then((data) => {
        setData(data)
      } )
      .catch(console.error);
  };
  useEffect(() => {
    getData()
  }, [])
  console.log(data)
  return (
    <div className="flex h-screen overflow-hidden">

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
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Catálogo</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm placeholder="Search by Product ID…" />
                {/* Filter button */}
                <FilterButton align="right" />
              </div>

            </div>

            {/* Table */}
            <ProductsTable />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationNumeric />
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Products;