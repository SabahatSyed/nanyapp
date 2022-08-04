import React from 'react'



function ParentDetails(props) {
  return (
    <div>
             <div className='w-[1150px] bg-white rounded-[8px] border-[1px] absolute left-[400px] mt-[10px]'>
            <div className='flex'>
                <p className='w-[300px] font-Poppins m-10 text-2xl font-semibold  '>Parent Details</p>

            </div>
            <div className=' w-[100%] h-[300px] bg-white '>
                <img class="w-[180px] h-[180px] absolute -mt-2 ml-10 rounded-full" src={props.img} alt="Neil image" />
                <div className='flex flex-col ml-[280px] font-Poppins text-lg gap-4 '>
                    <label className='text-[#6d6a6a]'> <label   className='text-xl font-medium  text-black '>Name: </label> {props.parent}</label>
                    <label className='text-[#6d6a6a]'>  <label className='text-xl font-medium text-black'>Username: </label>{props.username}</label>
                    <label className='text-[#6d6a6a]'>  <label className='text-xl font-medium text-black'>Date of Birth: </label>{props.Date_of_Birth}</label>
                    <label className='text-[#6d6a6a]'> <label className='text-xl font-medium text-black'>Gender: </label>{props.Gender}</label>
                    <label className='text-[#6d6a6a]'>  <label className='text-xl font-medium text-black'>Address: </label>{props.Address}</label>
                    <label className='text-[#6d6a6a]'> <label className='text-xl font-medium text-black'>Email: </label>{props.email}</label>
                </div>
            </div>




        </div>
    </div>
  )
}

export default ParentDetails