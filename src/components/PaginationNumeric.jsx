import React from 'react';

function PaginationNumeric({pagination, setPage}) {

  return (
    <>
      <div className="flex justify-center">
        <nav className="flex" role="navigation" aria-label="Navigation">
          <div className="mr-2">
            <span className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200  ${pagination?.firstPage ? "text-slate-300" : "hover:bg-blue-500 border text-slate-600 hover:text-white shadow-sm"}`} onClick={() => {if(!pagination?.firstPage) setPage(pagination?.currentPage - 1)}}>
              <span className="sr-only">Previous</span><wbr />
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
              </svg>
            </span>
          </div>
          <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
            <li>
              <span className="inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-slate-200 text-blue-500">{pagination?.currentPage}</span>
            </li>
            <li>
              <a className="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white" href="#0" onClick={() => {setPage(pagination?.nextPage)}}>{pagination?.nextPage}</a>
            </li>
            <li>
              <a className="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white" href="#0" onClick={() => {setPage(pagination?.nextPage + 1)}}>{pagination && pagination?.nextPage + 1}</a>
            </li>
            <li>
              <span className="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-slate-200 text-slate-400">…</span>
            </li>
            <li>
              <a className="inline-flex items-center justify-center rounded-r leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white" href="#0" onClick={() => {setPage(pagination?.nextPage + 7)}}>{pagination && pagination?.nextPage + 7}</a>
            </li>
          </ul>
          <div className="ml-2">
            <a href="#0" className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border-slate-200 ${pagination?.lastPage ? "text-slate-300" : "hover:bg-blue-500 border text-slate-600 hover:text-white shadow-sm"}`} onClick={() => {if(!pagination?.lastPage) setPage(pagination?.currentPage +1)}}>
              <span className="sr-only">Next</span><wbr />
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <div className="flex justify-center">
        <div className="text-sm text-slate-500 text-center sm:text-left py-2">
          <span className="font-medium text-slate-600">{pagination?.currentPage}</span> a <span className="font-medium text-slate-600">{pagination && pagination?.nextPage + 7}</span> de <span className="font-medium text-slate-600">{pagination?.totalPages}</span> resultados
        </div>
      </div>
    </>
  );
}

export default PaginationNumeric;
