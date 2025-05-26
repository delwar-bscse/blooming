
const FooterTitle = ({title}:{title:string}) => {
  return (
    <div className='flex flex-col pb-6'>
      <h3 className=" text-xl font-semibold py-3">{title}</h3>
      
      <p className='flex items-center w-40 h-[4px] bg-gray-400 rounded-[1px] opacity-50'>
        <span className='w-12 h-[4px] bg-gray-600 rounded-[1px]' />
      </p>
    </div>
  )
}

export default FooterTitle