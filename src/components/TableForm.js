import React, { useState,useEffect } from "react"
import { MdOutlineDeleteOutline} from "react-icons/md"
import { CiEdit } from "react-icons/ci"
import {v4 as uuidv4} from "uuid"

export default function TableForm({ description, setDescription, quantity, setQuantity, price, setPrice, Amount, setAmount, list, setList , total , setTotal }) {
    const[isEditing, setIsEditing] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!description && !quantity && !price){
          alert("Please fill in all inputs")
        } else {
            const newItems = {
                id: uuidv4(),
                description,
                quantity,
                price,
                Amount,
            }
            setDescription("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems])
            setIsEditing(false)
            console.log(list)
        }
    }
    useEffect(() => {
        const calculateAmount = (Amount) => {
            setAmount(quantity * price)
        }
        calculateAmount(Amount)
    }, [Amount, price, quantity, setAmount])
    useEffect(() => {
        let rows = document.querySelectorAll(".Amount")
    let sum = 0
    for(let i = 0; i < rows.length; i++){
        if(rows[i].className==="Amount"){
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
         setTotal(sum)
        }
    }
    })
    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)
        setList(list.filter((row) => row.id !== id)) 
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
    }
      const deletRow = (id) =>setList(list.filter((row) => row.id !== id)) 
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:mt-16">
                    <label htmlFor="description">Item description</label>
                    <input type="description"
                        name="description"
                        id="description"
                        placeholder="Item description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="md:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="Quantity">Item Quantity</label>
                        <input type="text"
                            name="Quantity"
                            id="Quantity"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Price">Item Price</label>
                        <input type="text"
                            name="Price"
                            id="Price"
                            placeholder=" Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Amount">Item Amount</label>
                        <p>{Amount}</p>
                    </div>
                </div>
                <button type="submit" className=" mb-5 bg-blue-500 text-white font-bold py-2 px-8 
              rounded shadow border-2 border-blue-500 
              transition-all duration-300 
              hover:bg-transparent hover:text-blue-500">{isEditing ? "Editing Row Item" : "Add Table Item"}</button>
            </form>
            <table width="100%" className="mb-10">
     <thead>
            <tr className="bg-gray-100 p-1 ">
                <td className="font-bold">Description</td>
                <td className="font-bold">Quantity</td>
                <td className="font-bold">Price</td>
                <td className="font-bold">Amount</td>
            </tr>
        </thead>
        {list.map(({id, description, quantity, price, Amount})=>(
            <React.Fragment key = {id}>
        <tbody>
            <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="Amount">{Amount}</td>
                <td><button onClick={() =>deletRow(id)}><MdOutlineDeleteOutline className="text-red-500 font-bold text-xl" /></button></td>
                <td><button onClick={() =>editRow(id)}><CiEdit className="text-green-500 font-bold text-xl"/></button></td>
            </tr>
        </tbody>
        </React.Fragment>
        )
        )}
     </table>
     <div>
        <h2 className="text-gray-800 flex item-end justify-end text-4xl font-bold">Kshs. {total}</h2>
     </div>
        </>
    )
}