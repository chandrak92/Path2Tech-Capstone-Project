// import React, { useRef, useEffect } from 'react';

// function Searchbar({ handleSubmit, searchTerm, handleChange, id, children, isFocused= true }) {
//     const inputRef= useRef();
//     useEffect(() => {
//         if(isFocused && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [isFocused]);
//     return (
//         <section className='search-bar-container'>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor={id}>
//                     {/* Must use children key name */}
//                     {children}
//                     <br></br>
//                     <input 
//                     type='text'
//                     placeholder='Enter a Climate Query'
//                     id={id}
//                     name='search-web'
//                     onChange={handleChange}
//                     value={searchTerm}
//                     ref= {inputRef}
//                     ></input>
//                 </label>
//                 <button 
//                 type='submit' 
//                 className='submit-search-query'>
//                     Search
//                 </button>
//             </form>
//         </section>
//     )
// }

// export default Searchbar