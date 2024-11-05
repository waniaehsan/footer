import Link from 'next/link';

export default function Navbar (){
    return (
        <div className="flex justify-around bg-blue-500 p-10">
            <h1 className="text-2xl text-black font-bold">
            
                <image src="https://cdn.vectorstock.com/i/2000v/19/26/cloud-solar-logo-template-creative-panel-vector-40461926.avif" style={{ width: '15rem' }} alt=""/>
            </h1>
            <h2>
                <ul className="flex gap-x-20" >
                <li className="text-black"><Link href="./">home</Link>
                   
                    </li>
                    <li>
                    <Link href="./contactus">contactus</Link>
                    </li>
                    <li > <Link href="./about">about</Link>
                    
                    </li>                
                </ul>
            </h2>
        </div>
    )
}
