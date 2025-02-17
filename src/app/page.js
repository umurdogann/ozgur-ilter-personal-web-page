import Image from 'next/image'
import React from 'react'
import { works } from '@/lib/works'

const page = () => {

  return (
    <section className='w-full flex flex-col items-center pt-20 ml-[300px] max-xl:ml-0 px-5 max-lg:px-1'>
      <div className='w-[855px] flex flex-col gap-3 max-[855px]:w-full items-center'>
        {
          works.map((work) => {
            return (
              <div key={work?.title} id={work.title} className='flex flex-col gap-3'>
                <h1 className='text-base font-medium w-full text-left'>{work.title}</h1>
                {work?.images?.map((image, index) => {
                  
                  return <Image src={image} key={index} alt='dummy' width={0} height={0} className='w-[854px] h-auto' />
                })}
                <p className='text-base text-justify font-light whitespace-pre-line'>
                  {work?.description}
                </p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default page