import  { useState }  from 'react'

const Form = ({createTodo}) => {
  const [ value, setValue ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 디폴트 디자인 막음
    console.log(value);
    createTodo(value);
    setValue('');
  }
  return (
    <form className='font-primary flex' onSubmit={handleSubmit}>
      <input type="text"
       placeholder='할 일 입력'
       className='outline-none bg-transparent border border-gray-500 p-1 w-[80%] text-gray-600 rounded placeholder:text-gray-100'
       value={value}
       onChange={(e) => setValue(e.target.value)}
      />
      <button className='bg-gray-700 p-2 text-gray-300 rounded ml-2 w-[20%]'>할일 추가</button>
    </form>
  )
}

export default Form