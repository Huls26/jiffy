export default function LoadingDot() {
  return (
    <div className='fixed top-20 sm:top-32 left-1/2 -translate-x-1/2 flex space-x-2 justify-center items-center bg-none'>
      <div className='h-3 w-3 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.3s]' />
      <div className='h-3 w-3 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s]' />
      <div className='h-3 w-3 bg-teal-400 rounded-full animate-bounce' />
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
