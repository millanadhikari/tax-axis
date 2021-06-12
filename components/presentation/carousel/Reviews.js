import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Review from "./Review";


function Reviews() {
    return (
        <div className="max-w-3xl sm:mx-auto text-center m-1 my-4">
            <h1 className="text-2xl font-semibold">TaxAxis is trusted by thousands of companies</h1>
            <Carousel
             autoPlay
             infiniteLoop
             showStatus={false}
             showIndicators={true}
             showThumbs={false}
             interval={5000}>
                <Review
                    src={'https://ichef.bbci.co.uk/news/976/cpsprodpb/125B3/production/_107178157_178151.jpg'}
                    name={'Mark Zuccenburg'}
                    company={'Facebook.com'}
                    review={"I've used other Accountants in the past, but TaxAxis is just simpler to use and manage. The team members are very supportive and always look forward in solving my needs."}
                     />
                <Review
                    src={'https://ichef.bbci.co.uk/news/976/cpsprodpb/125B3/production/_107178157_178151.jpg'}
                    name={'Milan Adhikari'}
                    company={'WedoCleaning.com'}
                    review={"Been using TaxAxis for a while now, and I'm very satisfied with their service."}
                     />
                 <Review
                    src={'https://ichef.bbci.co.uk/news/976/cpsprodpb/125B3/production/_107178157_178151.jpg'}
                    name={'Mark Zuccenburg'}
                    company={'Facebook.com'}
                    review={"I've used other Accountants in the past, but TaxAxis is just simpler to use and manage. The team members are very supportive and always look forward in solving my needs."}
                     />

            </Carousel>

        </div>
    )
}

export default Reviews
