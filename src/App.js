import { useState, useRef } from "react"
import Footer from "./components/footer"
import Notes from "./components/notes"
import Table from "./components/table"
import Header from "./components/header"
import MainDetails from "./components/mainDetails"
import ClientDetails from "./components/clientDetails"
import Dates from "./components/Dates"
import TableForm from "./components/TableForm"
import ReactToPrint, { useReactToPrint } from "react-to-print"
function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setaddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setbankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setnotes] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [Amount, setAmount] = useState("")
  const [list, setlist] = useState([])
  const [total, setTotal] = useState(0)

  const componentRef = useRef()
  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto 
      lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow ">
        {
          showInvoice ? (
            <>
              <ReactToPrint trigger={() => <button className="  ml-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print/Download</button>}
                content={() => componentRef.current} />
              <div ref={componentRef} className="p-5">
                <Header handlePrint={handlePrint} />
                <MainDetails name={name} address={address} />
                <ClientDetails clientName={clientName} clientAddress={clientAddress} />
                <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
                <Table description={description} quantity={quantity} price={price} Amount={Amount} list={list} setList=
                  {setlist}
                  total={total}
                  setTotal={setTotal} />
                <Notes notes={notes} setnotes={setnotes} />
                <Footer name={name} website={website} email={email} phone={phone} bankName={bankName} bankAccount={bankAccount} />
              </div>
              <button onClick={() => setShowInvoice(false)}
                className=" mt-5 bg-blue-500 text-white
        font-bold py-2 px-8 rounded shadow 
        border-blue-500 hhover:bg-transparent
         hover:text-blue-500 transition-all duration-300">Edit information</button>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col ">
                    <label htmlFor="name">Enter your name</label>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      placeholder="Enter your Name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="address">Enter your addrees</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter your address"
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </div>
                </article>
                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="email">Enter your Email</label>
                    <input
                      type="text"
                      name="Email"
                      id="Email"
                      placeholder="Enter your Email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone">Enter your phone number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="website">Enter your website</label>
                    <input
                      type="url"
                      name="website"
                      id="website"
                      placeholder="Enter your website"
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </article>
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="bank name">Enter your Bank name</label>
                    <input
                      type="text"
                      name="Bank"
                      id="bank"
                      placeholder="Enter your Bank Name"
                      autoComplete="off"
                      value={bankName}
                      onChange={(e) => setbankName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="BankAccount">Enter your Account Number </label>
                    <input
                      type="text"
                      name="bank account"
                      id="bank account"
                      placeholder="Enter your account Number"
                      autoComplete="off"
                      value={bankAccount}
                      onChange={(e) => setBankAccount(e.target.value)}
                    />
                  </div>
                </article>
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="clientName">Enter your client's Name</label>
                    <input
                      type="text"
                      name="ClientName"
                      id="clientName"
                      placeholder="Enter your client name"
                      autoComplete="off"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="client address">Enter your client's address</label>
                    <input
                      type="text"
                      name="client address"
                      id="client address"
                      placeholder="Enter your client address"
                      autoComplete="off"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                    />
                  </div>
                </article>
                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="invoicenumber">Enter your invoiceNumber </label>
                    <input
                      type="text"
                      name="invoiceNumber"
                      id="invoiceNumber"
                      placeholder="Enter your Invoice Number"
                      autoComplete="off"
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="invoiceDate">Enter your invoice Date </label>
                    <input
                      type="text"
                      name="invoice Date"
                      id="invoiceDate"
                      placeholder="Enter your invoice Date"
                      autoComplete="off"
                      value={invoiceDate}
                      onChange={(e) => setInvoiceDate(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Enter your dueDate </label>
                    <input
                      type="text"
                      name="due Date"
                      id="due Date"
                      placeholder="Enter your due date"
                      autoComplete="off"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                </article>
                <article>
                  <TableForm
                    description={description}
                    setDescription={setDescription}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    price={price}
                    setPrice={setPrice}
                    Amount={Amount}
                    setAmount={setAmount}
                    list={list}
                    setList={setlist}
                    total={total}
                    setTotal={setTotal} />
                </article>
                <div className="flex flex-col">
                  <label htmlFor="notes" >Additional Notes</label>
                  <textarea name="notes"
                    id="notes"
                    cols="30"
                    row="10"
                    placeholder="Additional notes to the client "
                    value={notes}
                    onchange={(e) => setnotes(e.target.value)}>
                  </textarea>
                </div>
                <button onClick={() => setShowInvoice(true)}
                  className="bg-blue-500 text-white
           font-bold py-2 px-8 rounded shadow 
           border-blue-500 hhover:bg-transparent
            hover:text-blue-500 transition-all duration-300">Preview Invoice
                </button>
              </div>
            </>
          )}
      </main>
    </>
  )
}
export default App