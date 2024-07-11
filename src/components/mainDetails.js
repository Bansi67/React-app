export default function mainDetails({name,address})
{
return(
    <>
    <section className="flex flex-col items-end justify-end">
          <h2 className="font-bold text-l uppercase md:text-2xl mb-1">{name}</h2>
          <p>{address}</p>
        </section>
        </>
)
}

