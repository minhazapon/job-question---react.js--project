import { Link } from "react-router-dom";




const CardFiles = () => {
    return (
        <div className=" mt-10 ml-10 mr-10">
               
             <div>
                 <h1 className=" text-center text-7xl font-mono font-bold text-[#30bdaa] ">Bangla version Details</h1>
                
             </div>  

             
            <div className=" flex justify-center items-center">


            <div className=" mb-10 mt-10 grid  md:grid-cols-2 gap-5">
              
            <Link to="/bh" >
            <div className=" border-[2px] border-[#30bdaa]  max-w-xs transition duration-300 ease-in-out hover:scale-110 p-6 rounded-md shadow-md bg-[#6420AA] text-gray-50">
	        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	        <div className="mt-6 mb-2">
	        	
	        	<h2 className="text-xl font-semibold tracking-wide">এইচটিএমএল </h2>
	        </div>
	        <p className="text-gray-100 text-2xl ">Click in Card For details  </p>
            </div>
			</Link>

            <Link to="/bc" >
            <div className="max-w-xs border-[2px] border-[#30bdaa] transition duration-300 ease-in-out hover:scale-110 p-6 rounded-md shadow-md bg-[#6420AA] text-gray-50">
	        <img src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	        <div className="mt-6 mb-2">
	        	
	        	<h2 className="text-xl font-semibold tracking-wide">সিএসএস</h2>
	        </div>
	        <p className="text-gray-100 text-2xl ">Click in Card For details  </p>
            </div>
			</Link>
             
			<Link to="/bj" >
            <div className="max-w-xs border-[2px] border-[#30bdaa] transition duration-300 ease-in-out hover:scale-110 p-6 rounded-md shadow-md bg-[#6420AA] text-gray-50">
	        <img src="https://korzh.com/assets/images/javascript.png" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	        <div className="mt-6 mb-2">
	        	
	        	<h2 className="text-xl font-semibold tracking-wide">জাভাস্ক্রিপ্ট </h2>
	        </div>
	        <p className="text-gray-100 text-2xl ">Click in Card For details  </p>
            </div>
			</Link>

            <Link  to="/br" >
            <div className="max-w-xs border-[2px] border-[#30bdaa] transition duration-300 ease-in-out hover:scale-110 p-6 rounded-md shadow-md bg-[#6420AA] text-gray-50">
	        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	        <div className="mt-6 mb-2">
	        	
	        	<h2 className="text-xl font-semibold tracking-wide">রিয়্যাক্ট</h2>
	        </div>
	        <p className="text-gray-100 text-2xl ">Click in Card For details  </p>
            </div>
			</Link>

            <Link to="/bm" >
            <div className="max-w-xs border-[2px] border-[#30bdaa] transition duration-300 ease-in-out hover:scale-110 p-6 rounded-md shadow-md bg-[#6420AA] text-gray-50">
	        <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	        <div className="mt-6 mb-2">
	        	
	        	<h2 className="text-xl font-semibold tracking-wide">মঙ্গডিবি</h2>
	        </div>
	        <p className="text-gray-100 text-2xl ">Click in Card For details  </p>
            </div>
			</Link>

            </div>

            </div>


            
        </div>
    );
};

export default CardFiles;