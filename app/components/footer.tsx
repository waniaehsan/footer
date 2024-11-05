import Link from 'next/link';
export default function Footer (){
    return (
        <div className="flex justify-around bg-red-500 p-10">
            <h1 className="text-2xl text-red-500 font-bold">
                copyright 2024
            </h1>
            <h2>
                <ul className="flex gap-x-20">
               
                   
                    
                    
                    <li > <Link href="https://www.google.co.uk/">google</Link>
                    
                    </li>                
                </ul>
            </h2>
        </div>
    )
}
