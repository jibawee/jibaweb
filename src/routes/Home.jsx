export default function Home() {


    return (
        <div className="flex flex-wrap p-30 pt-40 gap-10 h-200">
                <div className=" flex-1 min-w-80 flex-col border-2 border-green-400 bg-[url('/uni.jpg')] bg-cover bg-center p-10 text-black">
                    <p>WELCOME TO JIBAWEB WORLD</p>
                    <p>WE ARE CURRENTLY UNDERGOING RENNOVATIONS</p>
                </div>
                <div className="flex-2 min-w-150 max-w-175 min-h-100 flex gap-1 border-2 border-green-400 bg-[url('/book.png')] bg-[size:100%_100%] bg-no-repeat w-full text-center text-black text-xs">
                    <div className="flex-1 pl-15 pt-14">
                        <p>Column one placeholder text</p>
                        <p>More placeholder content here</p>
                    </div>
                    <div className="flex-1 pr-15 pt-14">
                        <p>Column two placeholder text</p>
                        <p>More placeholder content here</p>
                    </div>
                </div>
            
        </div>
    )
}
