import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  // Step3 => consuming
  const {page, handlePageChange, totalPages} = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-[5px]'>

        <div className='flex gap-x-2'>
          { page > 1 &&
            <button onClick={() => handlePageChange(page-1)} className='rounded-md border-2 py-1 px-2'>
              Previous
            </button>
          }

          { page < totalPages &&
            <button onClick={() => handlePageChange(page+1)} className='rounded-md border-2 py-1 px-2'>
              Next
            </button>
          }
        </div>


        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>

      </div>
    </div>
  )
}

export default Pagination
