'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { addEntry } from './_action'

export default function Form() {
  const [state, formAction] = useFormState(addEntry, null)
   console.log(state);
   
  
  return (
    <section className='flex gap-6'>
      <form
        action={formAction}
        className='flex flex-1 flex-col gap-4 sm:w-1/2'
        key={Math.random()}
      >
        <input className='rounded-lg border border-gray-300 p-2 outline-none' name='name' placeholder='name' />
         {
           (state && state.error) && <span className='text-red-500'>{state?.error?.name?._errors[0]}</span>
         }
        <input className='rounded-lg border border-gray-300 p-2 outline-none' name='message' placeholder='message' />
        {
           (state && state.error) && <span className='text-red-500'>{state?.error?.message?._errors[0]}</span>
         }
        <SubmitButton />
      </form>

      <div className='flex-1 rounded-lg bg-gray-700 p-8 text-white'>
        <pre className='text-white'>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className='rounded-lg bg-black py-2 text-white disabled:cursor-not-allowed disabled:opacity-50'
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
    
  )
}