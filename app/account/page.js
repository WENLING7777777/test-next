import React from 'react'

export default function Account() {
  function abc() {
    return dog()
  }
  const dog = ()=> "我我我"
  
  
  
  return (
    <>
        <h1>{abc()}</h1>
    </>
  )
}
