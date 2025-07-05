import { Mobiles } from '../assets/images';
import Button from './common/Button';

function MobileApps() {
    return (
        <section className="bg-gradient-to-b from-white via-orange-50 to-white lg:max-h-[500px] lg:p-10 space-y-20 ">
            <div className="w-10/12 mx-auto">
                <div
                    className={`flex flex-col-reverse md:flex-row items-center justify-between gap-16 pr-5 font-ruberoid w-full 
                'lg:flex-row-reverse'
            `}
                >
                    <div className="w-full lg:w-1/2 flex flex-col items-stretch">
                        <img src={Mobiles} alt={"Mobile Apps"} className="" />
                        <Button className="w-full lg:hidden py-6 mt-14 !text-lg sm:w-auto" />
                    </div>
                    <div className="w-full flex flex-col gap-1 lg:w-1/2 text-left">
                        <p className="text-lg font-semibold text-secondary mb-2">
                            Mobile Apps
                        </p>
                        <h2 className="text-4xl font-semibold text-primary mb-4 lg:w-3/5 leading-12">
                            "Event-Day Experience In Your Pocket"
                        </h2>
                        <p className="text-black text-base font-normal lg:w-4/5">
                           "From lead scanning and push notifications to personalized agendas and floorplan navigation, our white-labeled mobile apps are optimized for organizers, exhibitors, and attendees alike."
                        </p>
                        <div className="hidden lg:block mt-6">
                            <Button />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default MobileApps;
