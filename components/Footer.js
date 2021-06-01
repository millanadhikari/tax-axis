import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';


function Footer() {
    return (
        <div className="bg-[#383a3e] text-gray-100 py-5">
            <div className="max-w-5xl sm:mx-auto">
           <ul className="px-5 flex flex-col space-y-3 ">
               <li  className="cursor-pointer hover:underline ">Home</li>
               <li className="cursor-pointer hover:underline ">Pricing</li>
               <li className="cursor-pointer hover:underline ">About</li>
               <li className="cursor-pointer hover:underline ">Blogs</li>
           </ul>
           <div className="flex justify-between my-5 border-t-2 border-b-2 border-gray-400 py-5">
               <p className="px-5">Follow us on</p>
               <div className="pr-5 flex space-x-2 text-gray-500 cursor-pointer ">
                   <FacebookIcon/>
                   <InstagramIcon/>
                   <LinkedInIcon/>
                   <YouTubeIcon/>
               </div>
           </div>
           <h1 className="ml-5 font-bold text-2xl">TAX-AXIS</h1>
           <div className="ml-5 flex flex-col text-sm mt-10">
           <p>© 2021 Copyright ©TaxAxis Pty Ltd.</p>
           <p>All rights reserved.<span className="underline">Terms and conditions, </span> features, support, pricing, and service options subject to change without notice</p>
           </div>

           <div className="mx-5 flex flex-col gap-4 align-center my-5 md:flex-row md:justify-between">
           <p className="text-sm">By accessing and using this page you agree to the Terms and Conditions.</p>
           <div className="flex space-x-5 cursor-pointer">
               <p>Legal</p>
               <p>Privacy</p>
               <p>Security</p>
           </div>
           </div>
           </div>
        </div>
    )
}

export default Footer
