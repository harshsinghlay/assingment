import { SwiftReg, EventMail, Mobile } from '../assets/images';
import FeaturePlugNPlayCard from './common/PlugPlayCard';

const PlugAndPlay = () => {
    return (
        <section className="flex flex-col lg:items-start lg:justify-between w-10/12 mx-auto gap-6 font-ruberoid mb-20">
            <div className="w-full space-y-4 flex lg:flex-row flex-col justify-between lg:items-end">
                <div className="">
                    <h2 className="text-3xl lg:text-5xl font-semibold text-primary">
                        Plug And Play
                    </h2>
                </div>
                <p className="text-black text-lg lg:text-base lg:max-w-lg p-1">
                    Test tools are modular by design — meaning you can deploy
                    what you need, when you need it. Each module works great on
                    its own and even better together.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-full">
                <FeaturePlugNPlayCard
                    image={SwiftReg}
                    title="SwiftReg"
                    description="Your entire registration and check-in flow — simplified, branded, and built to scale."
                />
                <FeaturePlugNPlayCard
                    image={EventMail}
                    title="EventMail"
                    description="Send personalized invitations, reminders, and follow-ups via email and WhatsApp with advanced targeting."
                />
                <FeaturePlugNPlayCard
                    image={Mobile}
                    title="EventRover"
                    description="The all-in-one mobile app for attendees, exhibitors, and organizers — with real-time updates and offline mode."
                />
            </div>
        </section>
    );
};

export default PlugAndPlay;
