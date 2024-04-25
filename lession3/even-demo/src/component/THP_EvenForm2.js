import React from 'react'

export default function THP_EvenForm2() {

    // định nghĩa các hàm xử lý sự kiện
    const eventHandleClick1 = (content)=>{
        console.log("====================================");
        console.log(content);
        console.log("====================================");
    }
  return (
    <div className='alert alert-success'>
        <h2>Even Demo - function component</h2>
        <button onClick={eventHandleClick1("Trinh Huu Phuc")}>Goi khi render</button>
        <button onClick={()=>eventHandleClick1("K22CNT3-rejactJs")}>Goi khi click</button>
      
    </div>
  )
}
