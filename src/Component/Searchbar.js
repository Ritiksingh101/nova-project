import React, { useContext } from 'react'
import { Mydata } from '../Page/Mycontext'


function Searchbar() {
  const { showdiv,setShowdiv, productlist, setProductlist, search } = useContext(Mydata)

  return (

    <>
      { showdiv == 'Search' &&
      <div className='h-[80vh] z-10 fixed w-full'>
        <div onClick={()=>setShowdiv("")} className=' h-[60vh] z-10 w-[100%] flex justify-center items-center flex-col absolute gap-4 opacity-100 bg-white  '>
          <div className="flex justify-between flex-col h-[12vh] w-[80%]">
            <div className="text-2xl font-bold">Top Searches</div>
            <div className="flex space-x-4">
              <div className=" bg-slate-200 w-[15%] hover:shadow-lg hover:bg-white h-[5vh] rounded-md p-2 flex items-center justify-between">
                <span className="text-gray-700 flex justify-between font-medium">Beard Trimmers</span>
                <label><i class="fa fa-search" aria-hidden="true"></i></label>
              </div>

              <div className=" bg-slate-200 w-[12%] hover:shadow-lg hover:bg-white h-[5vh] rounded-md p-2 flex items-center justify-between">
                <span className="text-gray-700 flex justify-between font-medium">Grooming Kits</span>
                <label><i class="fa fa-search" aria-hidden="true"></i></label>
              </div>

              <div className=" bg-slate-200 w-[10%] hover:shadow-lg hover:bg-white h-[5vh] rounded-md p-2 flex items-center justify-between">
                <span className="text-gray-700 flex justify-between font-medium">Hair Dryers</span>
                <label><i class="fa fa-search" aria-hidden="true"></i></label>
              </div>

              <div className=" bg-slate-200 w-[12%] hover:shadow-lg hover:bg-white h-[5vh] rounded-md p-2 flex items-center justify-between">
                <span className="text-gray-700 flex justify-between font-medium">Weighing scale</span>
                <label><i class="fa fa-search" aria-hidden="true"></i></label>
              </div>

              <div className=" bg-slate-200 w-[8%] hover:shadow-lg hover:bg-white h-[5vh] rounded-md p-2 flex items-center justify-between">
                <span className="text-gray-700 flex justify-between font-medium">Masks</span>
                <label><i class="fa fa-search" aria-hidden="true"></i></label>
              </div>

              <div className=" bg-slate-200 w-[12%] hover:shadow-lg hover:bg-white h-[5vh] rounded-md p-2 flex items-center justify-between">
                <span className="text-gray-700 flex justify-between font-medium">Electric kettles</span>
                <label><i class="fa fa-search" aria-hidden="true"></i></label>
              </div>



            </div>





          </div>

          {/* -----------------------product api ------------------------------- */}

          <div className=' h-[40vh] w-[90%] flex overflow-scroll '>
            <div className='flex'>
              {productlist.filter((i)=> i.title.toLowerCase().includes(search.toLowerCase())).map((i, index) =>
                <div className='h-[40vh] w-[270px] flex justify-center'>

                  <div className='hide h-[40vh] w-[90%] flex relative flex-col'>
                    <img className='show absolute h-[20vh] left-[10px]  opacity-0' src={i.images[1]}></img>
                    <img className=' h-[20vh] w-[80%] object-cover' src={i.images}></img>
                    <label className='w-full' >{i.title}</label>

                    <label className=' font-bold'>RS.<s>{i.price}</s></label>
                    <label className=' font-bold text-[red]'>RS.{Math.floor(i.price - (i.price * (i.discount / 100)))}</label>
                  </div>



                </div>)}
            </div>

          </div>


        </div>
        <div onClick={()=> setShowdiv("")} className='w-full h-[80vh] bg-black opacity-50 fixed'></div>
        </div>
        }
    </>

  )
}

export default Searchbar