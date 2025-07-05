import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { User1, User2, User3, FooterBg, GradientFrame } from '../assets/images';
import Button from './common/Button';

const FooterLinks = [
    {
        title: 'By Event Type',
        links: [
            'Exhibitions & Expos',
            'Conferences & Conclaves',
            'Enterprise Events',
        ],
    },
    {
        title: 'By Stakeholder',
        links: ['For Organizers', 'For Exhibitors', 'For Attendees'],
    },
    {
        title: 'By Organization Type',
        links: ['Government', 'Corporates & Startups', 'Education', 'PrivLi'],
    },
    {
        title: 'By Phase',
        links: ['Pre Event', 'Live Event', 'Post-Event'],
    },
];

function Footer() {
    return (
        <footer>
            <section
                className="w-10/12 mx-auto rounded-xl p-8 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center text-white font-ruberoid"
                style={{
                    backgroundImage: `url(${FooterBg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
            
                <div className="text-left">
                    <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
                        Want <br className="hidden lg:block" />A Full Tour?
                    </h2>
                </div>

              
                <div className="mt-6 lg:mt-0 text-sm lg:text-base max-w-sm text-left">
                    <p className="mb-4 w-4/5 lg:w-full capitalize">
                        Let us show you how Test fits into your team’s ecosystem
                        — and grows with it.
                    </p>
                    <Button variant="gradient" className="mt-40 lg:mt-0 w-full sm:w-auto"  />
                </div>
            </section>

            <section
                className={` relative text-white bg-primary overflow-hidden rounded-t-3xl font-ruberoid mt-10`}
            >
                <div
                    className=" relative px-6 py-10 lg:py-16 bg-no-repeat bg-cover bg-center rounded-t-3xl"
                    style={{ backgroundImage: `url(${GradientFrame})` }}
                >
                    <div className="w-10/12 mx-auto flex flex-col lg:justify-between gap-10">
                        <div className="w-full flex flex-col md:flex-row  justify-between  md:items-center">
                            <div>
                                <h3 className="text-2xl font-semibold">
                                    Join Our Newsletter Today.
                                </h3>
                                <p className="text-lg text-gray-300 mb-3">
                                    Get Instant Updates
                                </p>
                                <div className="flex flex-col xl:flex-row md:items-center gap-4 mt-4 mb-6">
                                    <div className="flex -space-x-2">
                                        <img
                                            src={User3}
                                            className="w-16 h-16 rounded-full border-4 border-white bg-[#DCCEFC]"
                                        />
                                        <img
                                            src={User2}
                                            className="w-16 h-16 rounded-full border-4 border-white bg-[#FFE184]"
                                        />
                                        <img
                                            src={User1}
                                            className="w-16 h-16 rounded-full border-4 border-white bg-[#08BC8D]"
                                        />
                                    </div>
                                    <span className="text-base text-gray-300">
                                        200+ users subscribed to newsletter
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 xl:gap-1 md:flex-row  items-center px-2 py-1 w-full max-w-sm">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="text-sm text-black w-full outline-none placeholder-[#767676] bg-white px-7 py-4 flex items-center justify-center gap-2 rounded-4xl"
                                />
                                <Button text="Subscribe" variant="gradient" className='w-full sm:w-auto' />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-10 w-full justify-between text-sm">
                            <div className="flex flex-col gap-2 w-1/5">
                                <a
                                    href="#"
                                    className="font-semibold text-2xl leading-12"
                                >
                                    Platform
                                </a>
                                <a
                                    href="#"
                                    className="font-semibold text-2xl leading-12"
                                >
                                    Intelligence
                                </a>
                                <a
                                    href="#"
                                    className="font-semibold text-2xl leading-12"
                                >
                                    Showcase
                                </a>
                                <a
                                    href="#"
                                    className="font-semibold text-2xl leading-12"
                                >
                                    Resources
                                </a>
                                <a
                                    href="#"
                                    className="font-semibold text-2xl leading-12"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="font-semibold text-2xl leading-12"
                                >
                                    Book a demo
                                </a>
                            </div>

                            <div className="w-4/5">
                                <h4 className="font-semibold text-white mb-8">
                                    Solutions:
                                </h4>
                                <div className="flex justify-between flex-col xl:flex-row gap-4">
                                    {FooterLinks.map((group, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-2"
                                        >
                                            <p className="text-white text-lg font-medium leading-8 mb-5">
                                                {group.title}
                                            </p>
                                            <ul className="flex flex-col gap-4">
                                                {group.links.map(
                                                    (link, linkIndex) => (
                                                        <li key={linkIndex}>
                                                            <a
                                                                href="#"
                                                                className="hover:underline text-gray-300 font-normal text-base leading-8"
                                                            >
                                                                {link}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-10 w-full">
                            <div className="grid grid-cols-1 gap-2 xl:grid-cols-4 w-5/7 justify-between ">
                                <p>
                                    2118 Thornridge Cir.
                                    <br />
                                    Syracuse, Connecticut <br />
                                    35624
                                </p>
                                <p>
                                    2118 Thornridge Cir.
                                    <br />
                                    Syracuse, Connecticut <br />
                                    35624
                                </p>
                                <p>Hello@test.com</p>
                                <p>(201) 555 012</p>
                            </div>
                            <div className="flex sm:justify-end gap-3 mt-2 w-2/7">
                                <Button
                                    variant="gradient"
                                    text={<FaInstagram className="w-7 h-7" />}
                                    className="w-16 h-16 !p-1 aspect-square rounded-full sm:w-auto"
                                />
                                <Button
                                    variant="gradient"
                                    text={<FaYoutube className="w-7 h-7" />}
                                    className="w-16 h-16 !p-1 aspect-square rounded-full sm:w-auto"
                                />
                                <Button
                                    variant="gradient"
                                    text={<FaGithub className="w-7 h-7" />}
                                    className="w-16 h-16 !p-1 aspect-square rounded-full sm:w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
